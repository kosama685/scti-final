<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Job\CreateJobRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;
// use Barryvdh\Snappy\Facades\SnappyImage;
// use Barryvdh\Snappy\SnappyPDF;
//pdf
 use PDF;
//models
use App\Models\JobLog;
use App\Models\JobAppliedCandidate;
use App\Models\User;
use App\Models\PackageManagment;
use App\Models\JobSmartQuestion;
use App\Models\JobSmartAnswer;
//Libraries
use App\Http\Controllers\Api\BaseController;
use App\Models\Cv;
use App\Models\UserEducation;
use App\Models\UserExperience;
use App\Models\JobBenefits;
use Mail;
use App\Models\SubscriptionLog;

use App\Soachat;
class JobController extends BaseController
{
    //
    public function index(Request  $request, $id = null)
    {
        //dd($request->hours_of_work);
        $date = !!$request->to &&  $request->to != "null" && $request->from && $request->from != "null";
        $searchTerm = $request->title;
        $city = $request->city;

        $hours = !!$request->hours_of_work && $request->hours_of_work != "null";
        $years = !!$request->year_of_expereince && $request->year_of_expereince != "null";
        $education_training = !!$request->education_training && $request->education_training == "null";
        $category = !!$request->category && $request->category != "null";
        $period_of_employment = !!$request->period_of_employment && $request->period_of_employment != "null";
        $salary = !!$request->salary && $request->salary != "null";


        isset($request->hit_from) ? $id = auth()->user()->id: '';

        if($id != null)
        {

            return JobLog::where('user_id',$id)->when(!!$date ,function($q) use($request){
                // $q->whereBetween('apply_before',[Carbon::parse($request->from)->format('Y-m-d'),Carbon::parse($request->to)->format('Y-m-d')]);
                $q->whereDate('apply_before','>=' ,$request->from);
                $q->whereDate('apply_before', '<=', $request->to);
            })->when($request->filled('search'),function($q)use($request){

                $q->where('job_title', 'like', '%' . $request->search . '%');
            })->paginate($request->entries);
        }

        return JobLog::with('jobAppliedCandidate')->when(!!$date ,function($q) use($request){
            $q->whereBetween('apply_before',[Carbon::parse($request->from)->format('Y-m-d'),Carbon::parse($request->to)->format('Y-m-d')]);
        })->when(!!$hours,function($q) use($request){
            $q->where('hours_of_work',$request->hours_of_work);
        })->when(!!$salary ,function($q) use($request){
            $q->where('salary_range','>',$request->salary);
        })->when(!!$years,function($q) use($request){
            $q->where('years_of_experience',$request->year_of_expereince);
        })->when(!!$education_training,function($q) use($request){
            $q->where('degree',$request->education_training);
        })->when(!!$category,function($q) use($request){
            $q->where('category_id',$request->category);
        })->when(!!$period_of_employment,function($q) use($request){
            $q->where('period_of_employment',$request->period_of_employment);
        })->when(!!$searchTerm,function($q) use($request){
            $q->where('job_title', 'LIKE', "%{$request->title}%");
        })->when(!!$city,function($q) use($request){
            $q->where('city', 'LIKE', "%{$request->city}%");
        })->where('status',1)->paginate($request->entries);
    }

    public function jobCandidate(Request $request, $id)
    {
        return JobLog::with(['jobAppliedCandidate', 'jobAppliedCandidate.user', 'jobBenefits','jobSmartQuestion'])->where('id', $id)->paginate($request->entries);
        //JobAppliedCandidate::with(['job','user'])->where('job_id',$id)->paginate($request->entries);
    }

    public function index_job()
    {

        $id = auth()->user()->id;

        return JobLog::with('jobAppliedCandidate')
        ->orderby('created_at','DESC')->where('user_id',$id)
        ->get();
    }

    public function jobCandidateNew(Request $request,$id)
    {
        return JobLog::with(['jobAppliedCandidateApplied','jobAppliedCandidate.user'])->where('id',$id)->paginate($request->entries);
    }

    public function jobCandidateInterested(Request $request, $id)
    {
        return JobLog::with(['jobAppliedCandidateCheck', 'jobAppliedCandidateCheck.user'])->where('id', $id)->paginate($request->entries);
    }

    public function jobCandidateRejected(Request $request, $id)
    {
        return JobLog::with(['jobAppliedCandidateRejected', 'jobAppliedCandidate.user'])->where('id', $id)->paginate($request->entries);
    }

    public function create(CreateJobRequest $request) {
        
       //return $this->sendError($request->question);
        $createJobFlag = 0;
        $myString = $request->employee_benefits;
        $myArray  = explode(',', $myString);
        $jobData = $request->all();
        unset($jobData['employee_benefits']);

        $file = $this->uploadFile();
        
        unset($jobData['file']);
        $jobData['file'] = $file;
        $jobData['user_id'] = auth()->user()->id;
        $package = SubscriptionLog::with('Packages')->where('user_id', $jobData['user_id'])->latest()->first();
        $joBLimit = $package->Packages->question_limit;
        $totalJobCurrentUser = JobLog::where('user_id', $jobData['user_id'])->count();

        if( isset($package) && $joBLimit == 5 && $totalJobCurrentUser < $joBLimit ){
            $createJobFlag = 1;
        }else if( isset($package) && $joBLimit == 15 && $totalJobCurrentUser < $joBLimit ){
            $createJobFlag = 1;
        }else if( isset($package) && $joBLimit > 15 ){
            $createJobFlag = 1;
        }

        if($createJobFlag != 1){
            return $this->sendError('Your Package Limits End To Post New Job. Please Upadate your Package Or Delete Any Previous Jobs.');
        }else{

            $job_log = JobLog::create($jobData);
           
            $jobQuestions = $request->question;
            if(isset($jobQuestions)){
                for ($i=0; $i<count($jobQuestions); $i++) {
                    $data = array(
                        'job_id' => $job_log->id,
                        'question' => $jobQuestions[$i]
                    );
                    $jobQuestionsInsert = JobSmartQuestion::insert($data);
                }
            }
            
            // employee_benefits
            if (isset($request->employee_benefits)) {
                foreach ($myArray as $key => $item) {
    
                    $data = array(
                        'job_id' => $job_log->id,
                        'employee_benefits' => $item,
                    );
    
                    JobBenefits::insert($data);
                }
            }
    
            $job_city = $request->city;
            $role_user =
            $user_email = User::whereRaw('id IN (SELECT user_id FROM role_user WHERE role_id = 2)')->where('block_status', 0)->where('city', $job_city)
            ->get();
    
            $send_emails = array();
            foreach ($user_email as $item) {
                $send_emails[] = $item->email;
            }
    
            $send_emails;
            if(isset($send_emails))
            {
                try {
                    Mail::raw("Job Created in your city location", function ($message) use ($send_emails) {
                        $message->to($send_emails)
                            ->subject('Job Created By SCTI JOBS  ')
                            // ->body('Job Created By SCTI JOBS  Please Login')
                            ->from('richardsteve979@gmail.com');
                    });
                } catch (\Exception $e) {
                    return response()->json('error');
                }    
            }
    
            if($job_log){
                return $this->sendResponse($job_log, __('responseMessages.createJobSuccessfully'));
            }else{
                return $this->sendError('Error creating job');
            }
        }
    }

    public function getJobCandidate($job,$user) {

        return JobAppliedCandidate::with(['job','user','JobSmartAnswer' => function($query) use ($user) {
            $query->where('user_id', (int) $user)->join('job_smart_questions','job_smart_answers.question_id', '=', 'job_smart_questions.id');
        }])->where('job_id',$job)->first();
    }

public function jobStatus(Request $request)
{
    // return $request->all();
        JobAppliedCandidate::where('job_id',$request->job_id)->where('user_id',$request->user_id)->update([
            'status' => $request->status
        ]);
        $user_id = $request->user_id;
        $job = JobLog::where('id',$request->job_id)->first();
        $job_title = $job->job_title;
        $user = User::where('id',$user_id)->first();
        $send_emails= $user->email;
        $email_subject = $request->email_subject;
        $email_body = $request->email_body;
        if ($request->status == 'Interview') {

            Mail::raw("Interview Timing is ". $request->interview_timing . " Date  is " . $request->interview_date . ' message is '. $request->interview_message, function ($message) use ($send_emails, $job_title) {
                $message->to($send_emails)
                ->subject('Your Interview Has Been Schedule for the post of ' . $job_title)
                ->from('richardsteve979@gmail.com');
            });
        }
        if($request->status=='Rejected') {

            if ($email_subject) {
                Mail::send([], [], function ($message) use ($send_emails, $email_subject, $email_body) {
                    $message->to($send_emails)
                    ->subject($email_subject)
                    ->from('richardsteve979@gmail.com')
                    ->setBody($email_body, 'text/html');
                });    
            } else {
                Mail::send([], [], function ($message) use ($send_emails) {
                    $message->to($send_emails)
                    ->subject('Rejection EMail')
                    ->from('richardsteve979@gmail.com')
                    ->setBody('Sorry You Are Rejected!!!!', 'text/html');
                });
            }

            
        }



    return $this->sendResponse(true,__('responseMessages.jobStatusUpdatedSuccessfully'));

}

public function jobcandidateStatus($user_id,$job_id,$status)
{
        JobAppliedCandidate::where('job_id', $job_id)->where('user_id', $user_id)->update([
            'status' => $status
        ]);

        return $this->sendResponse(true, __('responseMessages.jobStatusUpdatedSuccessfully'));
}

public function updateStatus(Request $request,$id)
{

    JobLog::whereId($id)->update([
        'status' => $request->job_status
    ]);

    return $this->sendResponse(true,__('responseMessages.jobStatusUpdatedSuccessfully'));
}

public function jobUpdate(CreateJobRequest $request,$id)
{
    // return response()->json($request->employee_benefits);
    // return $request->employee_benefits;
    $myString = $request->employee_benefits;
    $myArray = explode(',', $myString);
    // print_r($myArray);
    // exit();
    $jobData = $request->all();
    unset($jobData['employee_benefits']);

    $file = $this->uploadFile();
    unset($jobData['file']);
    $jobData['file'] = $file;
    $jobData['user_id'] = auth()->user()->id;
    $job_log = JobLog::where('id',$id)->update($jobData);

    // employee_benefits
    // if (isset($request->employee_benefits)) {
    //     foreach ($myArray as $key => $item) {

    //         // $data = array(
    //         //     'job_id' => $id,
    //         //     'employee_benefits' => $item,
    //         // );

    //         JobBenefits::where('job_id',$id)->update([
    //             'job_id' => $id,
    //             'employee_benefits' => $item,
    //         ]);
    //     }
    // }

    return response()->json($request->all());
    // JobLog::whereId($id)->update([
    //     'status' => $request->job_status
    // ]);

    // return $this->sendResponse(true,__('responseMessages.jobStatusUpdatedSuccessfully'));
}

public function userAppliedJob(Request $request,$status)
{
    $date = !!$request->to &&  $request->to != "null" && $request->from && $request->from != "null";
    $statusCheck  = ($status === "all") ? false : true; 

    $jobLogs = JobAppliedCandidate::with('job')->where('user_id',auth()->user()->id)->when(!!$statusCheck,function($q)use($status){
        $q->where('status',$status);
    })->when(!!$date ,function($q) use($request){
        $q->whereBetween('created_at',[Carbon::parse($request->from)->format('Y-m-d'),Carbon::parse($request->to)->format('Y-m-d')]);
    })->get();

    return $this->sendResponse($jobLogs,__('responseMessages.userJobs'));
}

public function applyJob($job)
{

    $user = User::where('id', auth()->user()->id)->first();
    // $user_id = $user->id;
    // $job = JobLog::where('id',$job)->first();
    // $from_id = $job->user_id;
    // $user_id = $user->id;

    // \App\Soachat::addFriends($user_id, $from_id);

    if(isset($user->cv))
    {
            $job_already_applied = JobAppliedCandidate::where('job_id', $job)->where('user_id', auth()->user()->id)->first();
            if (isset($job_already_applied)) {
                
                return $this->sendError(  __('responseMessages.jobAppliedalready'));
            } else {

                JobAppliedCandidate::create([
                    'job_id' => $job,
                    'user_id' => auth()->user()->id
                ]);
                $this->createNotification(auth()->id(), 'Models/App/User', "You applied a job", "You applied a job", null, 'user');
                // return $this->sendResponse( __('responseMessages.jobAppliedSuccessfully'));
                return $this->sendResponse(true, __('responseMessages.jobAppliedSuccessfully'));
                // return $this->sendResponse(true, __('responseMessages.cvCreatedSuccessfully'));
            }
    }else{
            return $this->sendError(__('responseMessages.UploadCv'));
    }
   


}

public function applyJobWithQuestion(Request $request, $job){
    
    if($request->questionId_3 != '' && $request->question_1 == ''){
        return $this->sendError("All answers are Required");
    }

    $user = User::where('id', auth()->user()->id)->first();

    if(isset($user->cv))
    {
            $job_already_applied = JobAppliedCandidate::where('job_id', $job)->where('user_id', auth()->user()->id)->first();
            if (isset($job_already_applied)) {
                
                return $this->sendError(  __('responseMessages.jobAppliedalready'));
            } else {

                if( $request->questionId_1 != '' ){
                    JobSmartAnswer::create([
                        'job_id' => $job,
                        'question_id' => $request->questionId_1,
                        'answer' => $request->question_1,
                        'user_id' => auth()->user()->id
                    ]);
                }
                if( $request->questionId_2 != '' ){
                    JobSmartAnswer::create([
                        'job_id' => $job,
                        'question_id' => $request->questionId_2,
                        'answer' => $request->question_2,
                        'user_id' => auth()->user()->id
                    ]);
                }
                if( $request->questionId_3 != '' ){
                    JobSmartAnswer::create([
                        'job_id' => $job,
                        'question_id' => $request->questionId_3,
                        'answer' => $request->question_3,
                        'user_id' => auth()->user()->id
                    ]);
                }

                JobAppliedCandidate::create([
                    'job_id' => $job,
                    'user_id' => auth()->user()->id
                ]);
                $this->createNotification(auth()->id(), 'Models/App/User', "You applied a job", "You applied a job", null, 'user');
                // return $this->sendResponse( __('responseMessages.jobAppliedSuccessfully'));
                return $this->sendResponse(true, __('responseMessages.jobAppliedSuccessfully'));
                // return $this->sendResponse(true, __('responseMessages.cvCreatedSuccessfully'));
            }
    }else{
            return $this->sendError(__('responseMessages.UploadCv'));
    }
}

    public function chat_start ($job_user_id){

        $user_id = auth()->user()->id;
        $to_id = $job_user_id;
        // \App\Soachat::addFriends($user_id, $from_id);
        \App\Soachat::addFriends($user_id,$to_id);

    }

public function cvBuilder(Request $request)
{
    $cvs = Cv::create([
        'first_name' => $request->first_name,
        'last_name'  => $request->last_name,
        'dob'        => $request->dob,
        'phone_number' => $request->phone_number,
        'email'      => $request->email,
        'profession' => $request->profession,
        'interest_subject' => $request->interest_selected,
        'interest_desc' => $request->interest,
        'lang'      => $request->language,
        'user_id'  => auth()->id()
    ]);

    $education = json_decode($request->educations);
    $experience = json_decode($request->experiences);
        //dd($education);
    for ($i=0; $i < count($education); $i++) { 
        UserEducation::create([
            'degree' => $education[$i]->degree,
            'subject' =>$education[$i]->subjects,
            'institute_name' => $education[$i]->institute_name,
            'start_date'     => $education[$i]->start_date,
            'end_date'      => $education[$i]->end_date,
            'cvs_id'      => $cvs->id,
            'user_id'       => auth()->id()
        ]);
    }
    for ($i=0; $i < count($experience); $i++) { 
        UserExperience::create([
            'job_title' => $experience[$i]->job_title,
            'company_name' => $experience[$i]->company_name,
            'job_type'  => $experience[$i]->job_type,
            'start_date' => $experience[$i]->start_date,
            'end_date'   => $experience[$i]->end_date,
            'description' => $experience[$i]->description,
            'cvs_id'      => $cvs->id,
            'user_id'       => auth()->id()
        ]);
    }
    // $pdf = PDF::loadView('resume.index');
    // return $pdf->download('pdfview.pdf');
    return $this->sendResponse(true,__('responseMessages.cvCreatedSuccessfully'));

}
public function cvBuilderUpdate(Request $request)
{
       // dd($request);

    $cvs1 = Cv::where('user_id',auth()->id())->update([
        'first_name' => $request->first_name,
        'last_name'  => $request->last_name,
        'dob'        => $request->dob,
        'phone_number' => $request->phone_number,
        'email'      => $request->email,
        'profession' => $request->profession,
        'interest_subject' => $request->interest_subject,
        'interest_desc' => $request->interest_desc,
        'lang'      => $request->lang
    ]);
    $cvs = Cv::where('user_id',auth()->id())->first();
    UserEducation::where('user_id',auth()->id())->delete();
    UserExperience::where('user_id',auth()->id())->delete();
    $education = $request->education;
    $experience = $request->experience;
        //dd($education[0]['degree']);
    for ($i=0; $i < count($education); $i++) {

        UserEducation::create([
            'degree' => $education[$i]['degree'],
            'subject' => $education[$i]['subject'],
            'institute_name' => $education[$i]['institute_name'],
            'start_date'     => $education[$i]['start_date'],
            'end_date'      => $education[$i]['end_date'],
            'cvs_id'      => $cvs->id,
            'user_id'       => auth()->id()
        ]);
    }
    for ($i=0; $i < count($experience); $i++) { 
        UserExperience::create([
            'job_title' => $experience[$i]['job_title'],
            'company_name' => $experience[$i]['company_name'],
            'job_type'  => $experience[$i]['job_type'],
            'start_date' => $experience[$i]['start_date'],
            'end_date'   => $experience[$i]['end_date'],
            'description' => $experience[$i]['description'],
            'cvs_id'      => $cvs->id,
            'user_id'       => auth()->id()
        ]);
    }

   // $pdf = PDF::loadView('resume.index');
    // return $pdf->download('pdfview.pdf');

    return $this->sendResponse(true,__('responseMessages.cvCreatedSuccessfully'));

}

public function getUserCv()
{
    $cvs = Cv::where('user_id',auth()->id())->first();
    return $this->sendResponse($cvs,__('responseMessages.cvFetchedSuccessfully'));
}

public function deleteCv()
{
    Cv::where('user_id',auth()->id())->delete();
    UserEducation::where('user_id',auth()->id())->delete();
    UserExperience::where('user_id',auth()->id())->delete();
    return $this->sendResponse(true,__('responseMessages.deleteCvSuccessfully'));
}

public function downloadReume($id)
{
    $data = Cv::where('user_id',$id)->first();
    //dd($data);
    $pdf = PDF::loadView('resume.index',['data'=>$data]);
    return $pdf->download('resume.pdf');

}


    public function cv_download($id)
    {

        // $data = User::where('id', $id)->first();
        // return $data->cv;
        // $filepath = public_path('images/users/') . $data->cv;
        return response()->json("ASdasdasd");
        // $download = Response::download($filepath);
        //dd($data);
        // $pdf = PDF::loadView('resume.index',['data'=>$data]);
        // return $pdf->download('resume.pdf');

    }

private function generatePDF($props = []) {
        // $author   = array_key_exists('author', $props) ? $props['author'] : $this->author;
    // $data     = array_key_exists('data', $props) ? $props['data'] : json_decode($this->data);
    // $template = array_key_exists('template', $props) ? $props['template'] : $this->template;
    // $title    = array_key_exists('title', $props) ? $props['title'] : $this->title;

        // Extract out the contact information from the data so it can be
        // reused easily whenever required in the future by the templates.
        // $contact_info = self::extractContactInfo($data);

    return \PDF::loadView('resume.index',$props)
    ->setPaper('a4');

    
}

    public function check(){
        return "ASdasd";
    }


    public function jobs_get(){
        // return "ASdasd";
        $jobs = JobLog::get();
        return response()->json($jobs);
    }

    public function jobs_count (){
        $jobs = JobLog::count();
        return response()->json($jobs);
    }

    public function downloadbusinessinvoice($id)
    {

        // $data = [
        //     'title' => 'Welcome to ItSolutionStuff.com',
        //     'date' => date('m/d/Y')
        // ];

        // $pdf = PDF::loadView('check', $data);
        // return [
        //     'status' => "success",
        //     "data" => mb_convert_encoding($pdf->download(), 'UTF-8', 'UTF-8')
        // ];
        // return $pdf->download('itsolutionstuff.pdf');

        // return response()->json('asdasd');
        $invoice_view = SubscriptionLog::with('User', 'Packages')->where('id', $id)->first();
        //    return $invoice_view; 
        // dd($check);
        // $invoice_view = SubscriptionLog::with('User', 'Packages')->where('id', $id)->first();
        $pdf = PDF::loadView('resume.business_invoice',compact('invoice_view', $invoice_view));
        return $pdf->output();

        // return $pdf->download('resume.pdf');

    }

    public function cv($cv){
        
        $infoPath = pathinfo( public_path('images/users/'.$cv));
        $extension = $infoPath['extension'];
        return response()->download(
            public_path('images/users/' . $cv),
            'filename.jpg',
            ['Content-Type' => 'image/jpg']
        );

    }
    
}
