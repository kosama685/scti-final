<?php

namespace App\Http\Controllers\Api;

use App\Models\JobLog;
use App\Models\Notification;
use Mail;
use Hash;
use Validator;
use Carbon\Carbon;
use App\Mail\ForgotCode;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use jeremykenedy\LaravelRoles\Models\Role;
use App\Mail\Contactus;
// Models
use App\Models\User;
use App\Models\Feedback;
use App\Models\Transaction;
use App\Models\SubscriptionLog;
use App\Models\PackageManagment;
use App\Models\JobAppliedCandidate;

// Requests
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\ChangePasswordRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\AuthProfileUpdateRequest;

// Interfaces
use App\Repositories\Auth\UserInterface;

//Libraries
use App\Http\Controllers\Api\BaseController;

use App\Models\Subscribe;
use Auth;

class AuthController extends BaseController
{
    /**
     * AuthController constructor.
     *
     * @param  UserInterface  $user
     */
    public function __construct(UserInterface $user)
    {
        $this->user = $user;
    }

    /**
     * AuthController getProfile.
     *
     * @param  Request $request
     */
    public function index(Request $request)
    {
        // return response()->json($request->to);
        // dd($request->user_role);
        $date = !!$request->to &&  $request->to != "null" && $request->from && $request->from != "null";
        if(!!$date){
          
            // $fromDate = Carbon::parse($request->from)->format('yy-m-d');
            // $toDate = Carbon::parse($request->to)->format('yy-m-d');

            return User::whereRaw('id IN (SELECT user_id FROM role_user WHERE role_id = (SELECT id FROM roles where  slug = ? LIMIT 1))',['slug'=>$request->user_role])->where('block_status',0)
            ->whereDate('created_at', '>=' , $request->from)
            ->whereDate('created_at', '<=', $request->to)
            ->latest()->paginate($request->entries);
        }
        return User::whereRaw('id IN (SELECT user_id FROM role_user WHERE role_id = (SELECT id FROM roles where  slug = ? LIMIT 1))',['slug'=>$request->user_role])->where('block_status',0)
        ->latest()->paginate($request->entries);
       // return Role::with(['users' => function($builder) use ($request){
       //      $builder->where('block_status',0)->paginate($request->entries);
       //  }])->where('slug','user')->get()->pluck('users');

    }

    /**
     * AuthController Register.
     *
     * @param  Request  $request
     */

    public function register(RegisterRequest $request)
    {
        //  return $request->all();
        if($request->freeTrial=='1' || $request->package_id == null){

            $packageManagment = PackageManagment::where('package_name','Free Trial')->first();
            $user = $this->user->create($request->only(
                'first_name',
                'last_name',
                'email',
                'password',
                'role',
                'address',
                'country',
                'city',
                'zip_code',
                'role',
                'dob',
                'about_yourself'
            ),
              (isset($packageManagment)) ?   $packageManagment->id : ''
            );

        }else{
            $validator = Validator::make($request->all(), [ 'card_holder_name' => 'required', 'card_number' => 'required','cvv' => 'required','expiry_date' => 'required' ]); if ($validator->fails()) { return response()->json(['status' => '400', 'message' => $validator->errors()->all()], 400); }
            $package = PackageManagment::where('id',$request->package_id)->first();
            // return $package->radio;
            $stripe = $this->stripe($request->card_number,$request->expiry_date,$request->cvv,$package->charges);

            if($stripe->message){
                return $this->sendError($stripe->message,false);
            }

         

            // UserSubscription::create([
            //     'user_id' => auth()->user()->id,
            //     'subscription_type' => $subscription->type,
            //     'charges' => $subscription->charges,
            // ]);

            $user = $this->user->create($request->only(
                'first_name',
                'last_name',
                'email',
                'password',
                'role',
                'address',
                'country',
                'state',
                'city',
                'zip_code',
                'role',
                'dob',
                'about_yourself'
            ),$request->radio);

            Transaction::create([
                'order_date' => carbon::now(),
                'order_id' => $user->id,
                'transaction_id' => $stripe->id,
                'amount'         => $stripe->amount,
                'payment_method'         => 'stripe',
                'status' => 1

            ]);
        }

        \App\Soachat::addUser($user->id, $user->first_name, $image=null);

       

        if (isset($user)) {
            return $this->sendResponse($user, __('messages.success_register'));
        }else{
            return $this->sendError('Unable to register user.');
        }
    }

    public function register_web(RegisterRequest $request)
    {

        // if ($request->freeTrial) {
        //     $packageManagment = PackageManagment::where('package_name', 'Free Trial')->first();
        //     $user = $this->user->create(
        //         $request->only(
        //             'first_name',
        //             'last_name',
        //             'email',
        //             'password',
        //             'role',
        //             'address',
        //             'country',
        //             'city',
        //             'zip_code',
        //             'role',
        //             'dob',
        //             'about_yourself'
        //         ),
        //         (isset($packageManagment)) ?   $packageManagment->id : ''
        //     );
        // } else {
        //     $validator = Validator::make($request->all(), ['card_holder_name' => 'required', 'card_number' => 'required', 'cvv' => 'required', 'expiry_date' => 'required']);
        //     if ($validator->fails()) {
        //         return response()->json(['status' => '400', 'message' => $validator->errors()->all()], 400);
        //     }

        //     $pacakge = PackageManagment::whereId($request->radio)->first();

        //     $stripe = $this->stripe($request->card_number, $request->expiry_date, $request->cvv, $pacakge->charges);

        //     if ($stripe->message) {
        //         return $this->sendError($stripe->message, false);
        //     }

        //     Transaction::create([
        //         'order_date' => carbon::now(),
        //         'transaction_id' => $stripe->id,
        //         'amount'         => $stripe->amount,
        //         'payment_method'         => 'stripe',
        //         'status' => 1

        //     ]);

        // }

        $user = $this->user->create_web($request->only(
            'first_name',
            'last_name',
            'email',
            'password',
            'role',
            'address',
            'country',
            'state',
            'city',
            'zip_code',
            'role',
            // 'dob',
            // 'about_yourself'
        ));



        if (isset($user)) {
            return $this->sendResponse($user, __('messages.success_register'));
        } else {
            return $this->sendError('Unable to register user.');
        }
    }

    /**
     * AuthController Login.
     *
     * @param  LoginRequest  $request
     */

    public function login(LoginRequest $request)
    {
        dd('here');
        $user = User::where('email', $request->email)->first();
     
        if ($user) {

            if($user->block_status == '1') {
                return $this->sendError(__('responseMessages.userBlock'), false);
            }

            if (!$user->hasRole($request->role)) { // you can pass an id or slug
                return $this->sendError(__('responseMessages.userWithRoleNotFound', ['role' => $request->role]), false);
            }


            $logged_user = $this->user->login($user, $request->only(
                'email',
                'password'
            ));

            if(!is_null($logged_user) && $logged_user){
                return $this->sendResponse($logged_user, __('Welcome Back ' . $user->first_name ));
            }

            return $this->sendError(__('responseMessages.incorrectPassword'), false);
        }

        return $this->sendError(__('responseMessages.userNotFound'), false);
    }

    /**
     * AuthController Logout.
     *
     * @param  Request  $request
     */

    public function logout(Request $request)
    {
        if (true) {
            $user = $request->user();

            $user->token()->revoke();

            return $this->sendResponse(true, __('responseMessages.loggedOut'));
        }

        return $this->sendError(__('responseMessages.errorLogout'), false);
    }

     /**
     * AuthController sendForgotCode.
     *
     * @param  Request  $request
     */
    public function sendForgotCode(Request $request)
    {
        if(User::where('email', $request->email)->count() > 0){
            $request['code'] = $this->generatePIN(4);
            $user = User::where('email',$request->email)->update([
                'forgot_code' => $request['code']
            ]);

            Mail::to($request->email)->send(new ForgotCode($request));
            return $this->sendResponse(true, __('responseMessages.sendForgotCode'));
        }

        return $this->sendError(__('responseMessages.userNotFound'), false);
    }
     /**
     * AuthController verifiedForgotCode.
     *
     * @param  Request  $request
     */
    public function verifiedForgotCode(Request $request)
    {
        $user = User::where('forgot_code', $request->code)->first();

        if(!empty($user)){
            return $this->sendResponse($user->id, __('responseMessages.verifiedForgotCode'));
        }

        return $this->sendError(__('responseMessages.errorVerifiedForgotCode'), false);
    }

    public function forgotPasswordChange(Request $request)
    {
        $user = User::where('email',$request->email)->update([
            'password' => bcrypt($request['password']),
            'forgot_code'     => ''
        ]);

         return $this->sendResponse(true, __('responseMessages.passwordChanged'));
    }
// updaet
    public function AdminProfile(AuthProfileUpdateRequest $request)
    {
        
        // return $request->all();
        $user_profile_update = $this->user->profileUpdate($request);

        if($user_profile_update){
           return $this->sendResponse(true, __('responseMessages.profileEdited'));
        }
        return $this->sendError(__('responseMessages.errorEditingProfile'), false);
    }

    /**
     * AuthController changePassword.
     *
     * @param  ChangePasswordRquest  $request
     */

    public function changePassword(ChangePasswordRequest $request)
    {
        if (Hash::check($request->current_password, $request->user()->password)) {

            $userUpdated = $this->user->updatePassword($request->user(), $request->only(
                'password'
            ));

            if($userUpdated){
                return $this->sendResponse($userUpdated, __('responseMessages.passwordUpdated'));
            }

            return $this->sendError(__('responseMessages.errorUpdatingPassword'), false);
        }else{
            return $this->sendError(__('responseMessages.oldPasswordMismatch'), false);
        }
    }

    /**
     * AuthController getProfile.
     *
     * @param  Request $request
     */
    public function getProfile($id = null)
    {
        if($id != null){
            return User::whereId($id)->first();
        }
        $id = auth()->user()->id;

        $user =  User::with('applied_jobs.job.user.lastSubscriptionLog.Packages')->where('id',$id)->first();
        return $this->sendResponse($user, __('responseMessages.blockUser'));
    }

    /**
     * AuthController blockUser.
     *
     * @param  Request $request
     */
    public function blockedUser(Request $request)
    {
        User::whereId($request->id)->update([
            'block_status' => 1
        ]);
        return $this->sendResponse(true, __('responseMessages.blockUser'));
    }
    /**
     * AuthController blockUser.
     *
     * @param  Request $request
     */
    public function unblockedUser(Request $request)
    {
        User::whereId($request->id)->update([
            'block_status' => 0
        ]);
        return $this->sendResponse(true, __('responseMessages.unblockUser'));
    }

    /**
     * AuthController getProfile.
     *
     * @param  Request $request
     */
    public function getBlockedUser(Request $request)
    {

      $date = !!$request->to &&  $request->to != "null" && $request->from && $request->from != "null";
        if(!!$date){
            $fromDate = Carbon::parse($request->from)->format('yy-m-d');
            $toDate = Carbon::parse($request->to)->format('yy-m-d');
            return User::whereRaw('id IN (SELECT user_id FROM role_user WHERE role_id = (SELECT id FROM roles where  slug = ? LIMIT 1))',['slug'=>$request->user_role])->where('block_status',1)->whereBetween('created_at', [$fromDate, $toDate])->paginate($request->entries);
        }
        return User::whereRaw('id IN (SELECT user_id FROM role_user WHERE role_id = (SELECT id FROM roles where  slug = ? LIMIT 1))',['slug'=>$request->user_role])->where('block_status',1)
        ->paginate($request->entries);

    }
    /**
     * AuthController editUser.
     *
     * @param  $id
     */
    public function editUser($id)
    {

       return User::whereId($id)->first();

    }
    /**
     * AuthController editUser.
     *
     * @param  $id
     */
    public function update_user(Request $request)
    {
        //dd($request);

       $user = $this->user->update($request->only(
            'file_photo',
            'first_name',
            'last_name',
            'email',
            'phone',
            // 'address',
            'country',
            'state',
            'city',
            'zipcode',
            'id',
           'about_yourself',
           'dob',
           'interest'
        ));

        if (isset($user)) {
            return $this->sendResponse($user, __('responseMessages.userUpdated'));
        }else{
            return $this->sendError(__('responseMessages.errorUserUpdated'));
        }

    }

 public function dashboardStatic()
    {
        $year = request('year', date('Y'));
        $from = $year . '-01-01 00:00:00';
        $to = $year . '-12-31 00:00:00';

        $data  = JobLog::where('user_id', auth()->id())
            ->selectRaw('MONTH(created_at) as month, COUNT(id) total')
            ->whereBetween('created_at', [$from, $to])
            ->groupBy('user_id', 'month')
            ->get();

            
            $temp = [];
            $totalCount = 0;
            for ($i = 1; $i <= 12; $i++){
                $row = $data->where('month', $i)->first();
                $totalCount +=  (int)($row ? $row->total:0);
                $temp[] = $row? $row->total: 0;
            }
            $data = array();
            $data['graphdata'] = $temp;
            $data['totalJob'] = $totalCount;
            $data['notificationLog'] = Notification::latest()->limit(3)->get();
            $data['job_count'] = JobLog::where('status','1')->count();
            $data['job_applied'] = JobAppliedCandidate::where('status', 'Applied')->count();

            $data['user_name']=Auth::user()->first_name;
            $data['uuid'] = Auth::user()->uuid;

        return $data;
    }


    public function getNotification()
    {
        return Notification::where('notifiable_id',auth()->id())->latest()->get();
    }

    public function adminDashboardStatic()
    {
        $year = request('year', date('Y'));
        $from = $year . '-01-01 00:00:00';
        $to = $year . '-12-31 00:00:00';
        $revenue = Transaction::whereMonth('created_at', Carbon::now()->month)
                        ->sum('amount');
        $revenue_per_year = Transaction::whereYear('created_at', Carbon::now()->year)
            ->sum('amount');
        $data  = SubscriptionLog::selectRaw('MONTH(created_at) as month, SUM(charges) total')
            ->whereBetween('created_at', [$from, $to])
            ->groupBy('month')
            ->get();

        $temp = [];
        $totalSum = 0;
        for ($i = 1; $i <= 12; $i++){
                $row = $data->where('month', $i)->first();
                $totalSum +=  (int)($row ? $row->total:0);
                $temp[] = $row? $row->total: 0;
        }
        $data = array();
        $data['graphdata'] = $temp;
        $data['totalJob'] = $totalSum;
        $data['revenue_per_month'] = $revenue;
        $data['revenue_per_year'] = $revenue_per_year;
        $data['totalRegisterUser'] = count(User::all());
        $data['totalRegisterBusiness'] = count(User::whereRaw('id IN (SELECT user_id FROM role_user WHERE role_id = (SELECT id FROM roles where  slug = ? LIMIT 1))',['slug'=>'businessOwner'])->get());
        $data['notificationLog'] = Notification::latest()->limit(3)->get();

        return $data;
    }

    public function contactUs(Request $request){

        // return response()->json('asdasd')
        // try{
            Mail::to('arsalansalsoft1984@gmail.com')->send(new Contactus($request));

            Feedback::create([
                'name' => $request->name,
                'email' => $request->email,
                'message' => $request->message
            ]);
            return $this->sendResponse(true, __('responseMessages.contactUsSuccess'));
        // }catch(\Exception $e){
        //     return $this->sendError(__('responseMessages.unknownError'));
        // }
    }

    public function subscribe(Request $request) {

        // return $request->all();
        // Mail::to('arsalansalsoft1984@gmail.com')->send(new Contactus($request));
        try{
            Subscribe::create([
                'email' => $request->subscribe_email,
            ]);
            return $this->sendResponse(true, __('responseMessages.subscribeSuccess'));
        }catch(\Exception $e){
            return $this->sendError(__('responseMessages.unknownErrorSubscribe'));
        }
    }


    public function cv_add()
    {
        return 'is it work';
        // $user_profile_update = $this->user->profileUpdate($request);

        // if ($user_profile_update) {
        //     return $this->sendResponse(true, __('responseMessages.profileEdited'));
        // }
        // return $this->sendError(__('responseMessages.errorEditingProfile'), false);
    }

    public function password_update(Request $request) {

        $user_id =Auth::user()->id;
        // return response()->json($user_id);
        $current_password = $request->current_password;
        $user_check = User::where('id',$user_id)->first();
        if (Hash::check($current_password, auth()->user()->password)) {

            // $this->validate($request, [
            //     'password' => 'required|confirmed|min:6',
            // ]);

            $password = $request->password;
            $email = $request->email;
            $user_check->password = Hash::make($request->new_password);
            $user_check->save();
            return $this->sendResponse(true,__('responseMessages.passwordUpdate'));
        }
        return $this->sendError(__('responseMessages.passwordUpdateNot'));
    }

}