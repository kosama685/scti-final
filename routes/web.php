<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FrontendController;
use Illuminate\Http\Request;
// use App\Http\Controllers\Dashboard\UserController;
use App\Http\Controllers\CustomAuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 
    [FrontendController::class, 'index']
);


//Fortend-Pages-Routes
// Route::get('/home', [FrontendController::class, 'index']);
Route::get('/about-us', [FrontendController::class, 'about_us'])->name('about-us');
Route::get('/faqs', [FrontendController::class, 'faqs'])->name('faqs');
Route::get('/contact', [FrontendController::class, 'contact'])->name('contact');
Route::get('/welcome', [FrontendController::class, 'welcome'])->name('welcome');
Route::get('/login', [FrontendController::class, 'login'])->name('login');
Route::get('/business-login', [FrontendController::class, 'business_login'])->name('business-login');




// Route::get('dashboard', [CustomAuthController::class, 'dashboard']); 
// Route::get('login', [CustomAuthController::class, 'index'])->name('login');
// Route::post('custom-login', [CustomAuthController::class, 'customLogin'])->name('login.custom'); 
// Route::get('registration', [CustomAuthController::class, 'registration'])->name('register-user');
// Route::post('custom-registration', [CustomAuthController::class, 'customRegistration'])->name('register.custom'); 
// Route::get('signout', [CustomAuthController::class, 'signOut'])->name('signout');




// Backend-Pages-Routes
// Route::post('login' , [UserController::class, 'login'])->middleware('auth')->name('login');

// Route::get('/home', function () {
//     return view('frontpages.index');
// });
// Route::get('/about-us', function () {
//     return view('frontpages.about-us');
// });
// Route::get('/about-us', function () {
//     return view('frontpages.about-us');
// });

// Route::get('/contact', function () {
//     return view('frontpages.contact');
// });

// Route::get('/faqs', function () {
//     return view('frontpages.faqs');
// });
// Route::post('auth/login', [App\Http\Controllers\Api\AuthController::class, 'login'])->name('login');
// Route::get('login', function () {
//     return view('backendpages.user.login');

// });

Route::get('dashboard', function () {
    return view('backendpages.user.dashboard');

});
Route::get('/register', function () {
    return view('backendpages.user.register');
});
Route::get('/view-profile', function () {
    return view('backendpages.user.view-profile');
});
Route::get('/edit-profile', function () {
    return view('backendpages.user.edit-profile');
});
Route::get('/view-jobs', function () {
    return view('backendpages.user.view-jobs');
});

Route::get('/company_info', function () {
    return view('backendpages.user.company_info');
});


// Route::get('business-login', function () {
//     return view('business.business-login');
// });

Route::get('/business-dashboard', function () {
    return view('backendpages.business.dashboard');
});

Route::get('/contact-us', function () {
    return view('backendpages.business.contact-us');
});
Route::get('/create-jobs', function () {
    return view('backendpages.business.create-jobs');
});
Route::get('/edit-profile', function () {
    return view('backendpages.business.edit-profile');
});
Route::get('/my-jobs', function () {
    return view('backendpages.business.my-jobs');
});
Route::get('/subscription-invoice', function () {
    return view('backendpages.business.subscription-invoice');
});

Route::get('/subscription-log', function () {
    return view('backendpages.business.subscription-log');
});