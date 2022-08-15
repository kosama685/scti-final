<?php
namespace App\Repositories\Auth;

use App\Models\User;

interface UserInterface {

     function create(array $data,Int $packageId);
    function create_web(array $data);

    // function verify(User $user);

    // function resendVerificationCode(User $user);

    function login(User $user, array $data);

    function profileUpdate(array $data);

    // function logout($user);

    // function OAuthLogin(array $data);

    // function sendConfirmationCode(array $data);

    // function createProfile(User $user, array $data);

    // function updateUser(User $user, array $data);

    function updatePassword(User $user, array $data);

    // function updateAppSetting(User $user, array $data);
}
