<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Hash;




class UserController extends Controller
{


    public function login(Request $request){
        $user = User::where('email', $request->email)->first();
        if ($user) {

            if($user->block_status == '1') {
                return Redirect::back()->withErrors(['msg' => __('responseMessages.userBlock'),false]);
            }

            if (!$user->hasRole($request->role)) { // you can pass an id or slug
                return Redirect::back()->withErrors(['msg' => __('responseMessages.userWithRoleNotFound') ,false]);

            }

             $credentials = $request->only('email', 'password');
             if (Auth::attempt($credentials)) {
                 return Redirect::to('dashboard');
            }
            return Redirect::back()->withErrors(['msg' => __('responseMessages.incorrectPassword'),false]);

        }
        return Redirect::back()->withErrors(['msg' => __('responseMessages.userNotFound'),false]);
    }
}
