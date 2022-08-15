<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::get('/cv_download/{id}', [App\Http\Controllers\Api\JobController::class, 'cv_download'])->name('cv_download');
Route::get('/cv_add', [App\Http\Controllers\Api\AuthController::class, 'cv_add'])->name('cv_add');
Route::get('/jobs', [App\Http\Controllers\Api\JobController::class, 'jobs_get'])->name('jobs_get');
Route::get('/jobs/count', [App\Http\Controllers\Api\JobController::class, 'jobs_count'])->name('jobs_count');
Route::group(['middleware' => ['json.response', 'localization']], function () {
	//Auth
	Route::post('auth/login', [App\Http\Controllers\Api\AuthController::class, 'login'])->name('login');
	Route::post('auth/register', [App\Http\Controllers\Api\AuthController::class, 'register'])->name('register');
	Route::post('auth/register_web', [App\Http\Controllers\Api\AuthController::class, 'register_web'])->name('register_web');
	Route::post('auth/send/email', [App\Http\Controllers\Api\AuthController::class, 'sendForgotCode'])->name('sendForgotCode');
	Route::post('auth/verify/code', [App\Http\Controllers\Api\AuthController::class, 'verifiedForgotCode'])->name('verifiedForgotCode');
	Route::post('auth/new-password', [App\Http\Controllers\Api\AuthController::class, 'forgotPasswordChange'])->name('forgotPasswordChange');

	Route::get('admin/getEmployeeBenefits', [App\Http\Controllers\Api\CategoryController::class, 'getEmployeeBenefits'])->name('getEmployeeBenefits');
	Route::get('admin/category', [App\Http\Controllers\Api\CategoryController::class, 'index'])->name('category.index');
	Route::post('admin/contactUs', [App\Http\Controllers\Api\AuthController::class, 'contactUs'])->name('user.contactUs');
	Route::post('admin/subscribe', [App\Http\Controllers\Api\AuthController::class, 'subscribe'])->name('user.subscribes');
	Route::get('user/downloadReume/{id}',[App\Http\Controllers\Api\JobController::class, 'downloadReume'])->name('downloadReume');
	Route::get('user/package', [App\Http\Controllers\Api\PackageManagmentController::class, 'getPackage'])->name('package.withAuthentication');

	Route::middleware('auth:api')->group( function () {
		Route::group(['prefix' => 'admin'], function () {



			
			//Auth
			Route::post('/logout', [App\Http\Controllers\Api\AuthController::class, 'logout']);
			Route::get('/getUser', [App\Http\Controllers\Api\AuthController::class, 'index'])->name('getUser');
			Route::post('/profile', [App\Http\Controllers\Api\AuthController::class, 'AdminProfile'])->name('AdminProfile');
		
			Route::post('/changePassword', [App\Http\Controllers\Api\AuthController::class, 'changePassword'])->name('changePassword');
			Route::get('/getProfile', [App\Http\Controllers\Api\AuthController::class, 'getProfile'])->name('getProfile');
			Route::get('/getProfile/{id}', [App\Http\Controllers\Api\AuthController::class, 'getProfile'])->name('getProfile.edit');
			Route::post('/user/create', [App\Http\Controllers\Api\AuthController::class, 'register'])->name('user.register');
			Route::post('/block-user', [App\Http\Controllers\Api\AuthController::class, 'blockedUser'])->name('user.block');
			Route::get('/block', [App\Http\Controllers\Api\AuthController::class, 'getBlockedUser'])->name('get.blocked.users');
			Route::post('/unblock-user', [App\Http\Controllers\Api\AuthController::class, 'unBlockedUser'])->name('get.unblocked.users');
			Route::post('/edit/user/{id}', [App\Http\Controllers\Api\AuthController::class, 'editUser'])->name('get.user.edit');
			Route::post('/update-user', [App\Http\Controllers\Api\AuthController::class, 'update_user'])->name('get.update_User');

			//packageManagment
			Route::get('/previousPackage', [App\Http\Controllers\Api\PackageManagmentController::class, 'previous_package'])->name('package.previous_package');
			Route::get('/package', [App\Http\Controllers\Api\PackageManagmentController::class, 'getPackage'])->name('package');
			Route::get('/package/{id}', [App\Http\Controllers\Api\PackageManagmentController::class, 'getPackage'])->name('package.id');
			Route::post('/package/update', [App\Http\Controllers\Api\PackageManagmentController::class, 'update'])->name('package.update');

			//SubscriptionController
			Route::get('/invoice/{id}', [App\Http\Controllers\Api\SubscriptionController::class, 'invoice'])->name('invoice.view');
			Route::get('/subscriptions', [App\Http\Controllers\Api\SubscriptionController::class, 'index'])->name('subscriptions.index');
			Route::get('/subscriptions/{id}', [App\Http\Controllers\Api\SubscriptionController::class, 'index'])->name('subscriptions.edit');
			Route::get('/subscriptions/users/package', [App\Http\Controllers\Api\SubscriptionController::class, 'getCurrentUserPackage'])->name('subscriptions.getCurrentUserPackage');
			Route::post('/subscriptions/updateUserPackage', [App\Http\Controllers\Api\SubscriptionController::class, 'updateUserPackage'])->name('subscriptions.updateUserPackage');


			//PaymentLogController
			Route::get('/paymentlog', [App\Http\Controllers\Api\PaymentLogController::class, 'index'])->name('paymentlog.index');
			Route::get('/paymentlog/{id}', [App\Http\Controllers\Api\PaymentLogController::class, 'index'])->name('paymentlog.id');

			
			Route::get('/index_job', [App\Http\Controllers\Api\JobController::class, 'index_job'])->name('joblog.index_job');
			//JobLogController
			Route::post('jobs/create',[App\Http\Controllers\Api\JobController::class, 'create'])->name('job.create');
			Route::get('/joblog', [App\Http\Controllers\Api\JobController::class, 'index'])->name('joblog.index');
			Route::get('/joblog/{id}', [App\Http\Controllers\Api\JobController::class, 'index'])->name('joblog.id');
			Route::get('/candidate/job/{id}', [App\Http\Controllers\Api\JobController::class, 'jobCandidate'])->name('jobCandidate');
			Route::get('/new_candidate/job/{id}', [App\Http\Controllers\Api\JobController::class, 'jobCandidateNew'])->name('jobCandidate');
			Route::get('/interested_candidate/job/{id}', [App\Http\Controllers\Api\JobController::class, 'jobCandidateInterested'])->name('jobCandidateInterested');
			Route::get('/rejected_candidate/job/{id}', [App\Http\Controllers\Api\JobController::class, 'jobCandidateRejected'])->name('jobCandidateRejected');
			Route::post('job/{id}',[App\Http\Controllers\Api\JobController::class, 'updateStatus'])->name('job.updateStatus');
			Route::post('job/candidate/status',[App\Http\Controllers\Api\JobController::class, 'jobStatus'])->name('job.status.create');
			Route::get('job/update_candidate/{user_id}/{job_id}/{status}', [App\Http\Controllers\Api\JobController::class, 'jobcandidateStatus'])->name('job.status.candidate');
			Route::get('job/{job}/candidate/{user}',[App\Http\Controllers\Api\JobController::class, 'getJobCandidate'])->name('job.candidate');
			//Route::get('job/{job}/candidate/user',[App\Http\Controllers\Api\JobController::class, 'applyJob'])->name('job.applyJob');
			Route::post('job_update/{id}',[App\Http\Controllers\Api\JobController::class, 'jobUpdate'])->name('job.jobUpdate');
			// 
		

			//Employee
			Route::post('/block-employee', [App\Http\Controllers\Api\EmployeeController::class, 'blockedEmployee'])->name('employee.block');
			Route::get('/blockedEmployee', [App\Http\Controllers\Api\EmployeeController::class, 'getBlockedEmployee'])->name('get.blocked.employee');
			Route::post('/unblock-employee', [App\Http\Controllers\Api\EmployeeController::class, 'unBlockedEmployee'])->name('get.unblocked.employee');
			Route::get('/employees', [App\Http\Controllers\Api\EmployeeController::class, 'index'])->name('employees.index');
			Route::get('/edit/employee/{id}', [App\Http\Controllers\Api\EmployeeController::class, 'editEmployee'])->name('employees.edit');
			Route::post('/employee-update', [App\Http\Controllers\Api\EmployeeController::class, 'employee_update'])->name('employees.update');
			Route::get('/getEmployee/{id}', [App\Http\Controllers\Api\EmployeeController::class, 'getEmployee'])->name('employees.getEmployee');
			Route::get('/statics', [App\Http\Controllers\Api\EmployeeController::class, 'statics'])->name('employees.statics');

			//questionaires
			Route::get('/getQuestionaire', [App\Http\Controllers\Api\QuestionaireController::class, 'index'])->name('questionaires.index');
			Route::post('questionaire/create', [App\Http\Controllers\Api\QuestionaireController::class, 'create'])->name('questionaires.create');

			//homecontroller
			Route::get('/dashboardStatic', [App\Http\Controllers\Api\AuthController::class, 'dashboardStatic'])->name('dashboardStatic');
			Route::get('/adminDashboardStatic', [App\Http\Controllers\Api\AuthController::class, 'adminDashboardStatic'])->name('adminDashboardStatic');


			//instituteManagment
			Route::get('/institute', [App\Http\Controllers\Api\InstitutesManagment::class, 'index'])->name('institute.index');

			//category
			Route::post('category/create', [App\Http\Controllers\Api\CategoryController::class, 'create'])->name('category.create');
			Route::post('category/update', [App\Http\Controllers\Api\CategoryController::class, 'update'])->name('category.update');
			
			//Route::get('category', [App\Http\Controllers\Api\CategoryController::class, 'index'])->name('category.index');
			//Network and Training
			Route::post('networktraining/create', [App\Http\Controllers\Api\NetworkTrainingController::class, 'create'])->name('networktraining.create');
			Route::post('networktraining/update', [App\Http\Controllers\Api\NetworkTrainingController::class, 'update'])->name('networktraining.update');
			Route::get('networktraining', [App\Http\Controllers\Api\NetworkTrainingController::class, 'index'])->name('networktraining.index');

			//feedback
			Route::get('feedback', [App\Http\Controllers\Api\FeedbackController::class, 'index'])->name('feedback.index');

			Route::get('downloadbusinessinvoice/{id}', [App\Http\Controllers\Api\JobController::class, 'downloadbusinessinvoice'])->name('downloadbusinessinvoice.index');
			Route::get('cv/{id}', [App\Http\Controllers\Api\JobController::class, 'cv'])->name('cv.index');

			//notification

			Route::get('getNotification', [App\Http\Controllers\Api\AuthController::class, 'getNotification'])->name('auth.getNotification');
		});

		Route::group(['prefix' => 'user'], function () {
			Route::post('/password_update', [App\Http\Controllers\Api\AuthController::class, 'password_update'])->name('password_update');
		    Route::post('cvBuilder',[App\Http\Controllers\Api\JobController::class, 'cvBuilder'])->name('job.cvBuilder');
		    Route::get('cv',[App\Http\Controllers\Api\JobController::class, 'getUserCv'])->name('job.getUserCv');
		    Route::post('cv/update',[App\Http\Controllers\Api\JobController::class, 'cvBuilderUpdate'])->name('job.cvBuilderUpdate');
		    Route::get('cv/delete',[App\Http\Controllers\Api\JobController::class, 'deleteCv'])->name('job.deleteCv');
		    Route::get('jobs/{status}',[App\Http\Controllers\Api\JobController::class, 'userAppliedJob'])->name('job.userAppliedJob');
		    Route::get('job/{job}/user',[App\Http\Controllers\Api\JobController::class, 'applyJob'])->name('job.applyJob');
			Route::get('job_chat/{job_user_id}/', [App\Http\Controllers\Api\JobController::class, 'chat_start'])->name('job.chat_start');
		    //Route::get('jobs/{status}',[App\Http\Controllers\Api\JobController::class, 'jobList'])->name('job.userAppliedJob');
		    Route::get('network/training/getById/{id}',[App\Http\Controllers\Api\NetworkTrainingController::class, 'getById'])->name('network.training.getById');
		    Route::get('network/training/registerNetworkTraining/{id}',[App\Http\Controllers\Api\NetworkTrainingController::class, 'registerNetworkTraining'])->name('network.training.registerNetworkTraining');
		    

			Route::post('jobwithquestion/{job}/user',[App\Http\Controllers\Api\JobController::class, 'applyJobWithQuestion'])->name('job.applyJobWithQuestion');
        });


       
	});
});
