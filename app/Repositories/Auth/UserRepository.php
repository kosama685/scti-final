<?php

namespace App\Repositories\Auth;

use DB;
use Hash;
use Mail;
use Auth;
use Carbon\Carbon;
use App\Exceptions\GeneralException;

// Models
use App\Models\User;
use App\Models\UserCareerDetail;
use App\Models\PackageManagment;
use App\Models\SubscriptionLog;


// Libraries
use App\Repositories\BaseRepository;

/**
 * Class UserRepository.
 */
class UserRepository extends BaseRepository implements UserInterface
{

    /*
     *
     * UserRepository constructor.
     * @param  User  $model
     *
     */

    public function __construct(User $model)
    {
        $this->model = $model;
    }

    /*
     *
     * @param array $data
     * @throws \Exception
     * @throws \Throwable
     * @return mixed[]
     *
     */

    public function create($data,$packageId)
    {
        //dd($data);
        return DB::transaction(function () use ($data,$packageId) {

            $user = $this->model::create([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'name' => $data['first_name'] . ' ' . $data['last_name'],
                'address' => $data['address'],
                'email' => $data['email'],
                'country' => $data['country'],
                'password' => bcrypt($data['password']),
                'city' => $data['city'],
                'zip_code' => $data['zip_code'],
                'about_yourself' => isset($data['about_yourself']) ? $data['about_yourself'] : null,
                'dob' => isset($data['dob']) ? $data['dob'] : null,
                
            ]);




            $package = PackageManagment::where('id',$packageId)->first();
            $newDateTime = Carbon::now()->addDay((isset($package->duration)) ? $package->duration : '' );
            
            $role = config('roles.models.role')::where('slug', $data['role'])->first();
            $user->attachRole($role);
            $subscriptionslog = SubscriptionLog::create([
               'package_id' => $packageId,
               'user_id' => $user->id,
               'expiry_date' => $newDateTime,
               'charges' => $package->charges,
               'user_type' => ($data['role'] == 'businessOwner') ? 1 : 0,
           ]);

          


            if (isset($data['file_photo'])) {
                $this->fileUpload($data['file_photo'], $user->id, 'users');
            }
            return $user;
        });

        throw new GeneralException(__('exceptions.backend.access.users.create_error'));

    }

    public function create_web($data)
    {
        //dd($data);
        return DB::transaction(function () use ($data) {

            $user = $this->model::create([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'name' => $data['first_name'] . ' ' . $data['last_name'],
                // 'address' => $data['address'],
                'email' => $data['email'],
                'country' => $data['country'],
                'password' => bcrypt($data['password']),
                'city' => $data['city'],
                'zip_code' => $data['zip_code'],
                // 'about_yourself' => isset($data['about_yourself']) ? $data['about_yourself'] : null,
                // 'dob' => isset($data['dob']) ? $data['dob'] : null,
            ]);

            // $package = PackageManagment::where('id', $packageId)->first();
            // $newDateTime = Carbon::now()->addDay((isset($package->duration)) ? $package->duration : '');

            $role = config('roles.models.role')::where('slug', $data['role'])->first();
            $user->attachRole($role);
            // $subscriptionslog = SubscriptionLog::create([
            //     'package_id' => $packageId,
            //     'user_id' => $user->id,
            //     'expiry_date' => $newDateTime,
            //     'charges' => 300,
            //     'user_type' => ($data['role'] == 'businessOwner') ? 1 : 0,
            // ]);
            // if (isset($data['file_photo'])) {
            //     $this->fileUpload($data['file_photo'], $user->id, 'users');
            // }
            return $user;
        });

        throw new GeneralException(__('exceptions.backend.access.users.create_error'));
    }

    /*
     *
     * @param array $data
     * @throws \Exception
     * @throws \Throwable
     * @return mixed[]
     *
     */

    public function update($data)
    {
        // dd($data);
        return DB::transaction(function () use ($data) {

            $user = $this->model::find($data['id'])->update([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'name' => $data['first_name'] . ' ' . $data['last_name'],
                'address' => $data['address'],
                'email' => $data['email'],
                'phone' => (isset($data['phone'])) ? $data['phone'] : '',
                'country' => $data['country'],
                'state' => $data['state'],
                'city' => $data['city'],
                'zip_code' => $data['zipcode'],
                'about_yourself' => $data['about_yourself'],
                'dob' => $data['dob'],
                'interest' => $data['interest'],
            ]);

            if (isset($data['file_photo'])) {
                $this->fileUpload($data['file_photo'], $user->id, 'users');
            }

            return true;
        });

        throw new GeneralException(__('exceptions.backend.access.users.create_error'));

    }

    // /*
    //  *
    //  * @param User  $user
    //  * @throws GeneralException
    //  * @return boolean
    //  *
    //  */

    // public function verify(User $user)
    // {
    //     return DB::transaction(function () use ($user) {

    //         if($user->markAccountAsVerified()){
    //             //Log creating
    //             \Log::channel('mysql')->info('User verified with code : ' . $user->code);
    //             return true;
    //         }else{
    //             //Log creating
    //             \Log::channel('mysql')->info('User verified failed with code : ' . $user->code);
    //             return false;
    //         }

    //         throw new GeneralException(__('exceptions.backend.access.users.update_error'));
    //     });
    // }

    // /*
    //  *
    //  * @param User  $user
    //  * @throws GeneralException
    //  * @return User $user
    //  *
    //  */

    // public function resendVerificationCode(User $user)
    // {
    //     return DB::transaction(function () use ($user) {
    //         $code = $this->generatePin(6);

    //         $regenrated_code = $user->update([
    //             'confirmation_code' => $code
    //         ]);

    //         if ($regenrated_code) {

    //             $user->refresh();
    //             $user = $user->only(['id', 'email', 'phone', 'confirmation_code', 'created_at', 'updated_at']);

    //             if ($user['email'] !== null) {
    //                 Mail::to($user['email'])->send(new VerifyMail($user));
    //                 \Log::channel('mysql')->info('Verification code : '. $user['confirmation_code'] .' resent on ' . $user['email']);
    //             }

    //             if ($user['phone'] !== null){

    //                 $message_sent = $this->sendMessage($user['phone'], __('messages.verificationMessage', ['code' => $user['confirmation_code']]));

    //                 \Log::channel('mysql')->info('Verification code : '. $user['confirmation_code'] .' resent on ' . $user['phone']);
    //             }

    //             return $user;
    //         }

    //         throw new GeneralException(__('exceptions.backend.access.users.update_error'));
    //     });
    // }

    /*
     *
     * @param User  $user
     * @param array  $data
     *
     * @throws GeneralException
     * @return User $user
     *
     */

    public function login(User $user, array $data)
    {
        return DB::transaction(function () use ($user, $data) {

            if (Hash::check($data['password'], $user->password)) {
                // Indicating user has logged In from temp pass after login
                $token = $user->createToken(env('APP_NAME'))->accessToken;

                $user['token'] = $token;
                $user['role'] = $user->getRoles()[0]->slug;

                return $user;
            }
            return false;
            // Generating Laravel Passport Token

        });
    }

    /*
     *
     * @param array  $data
     *
     * @throws GeneralException
     * @return Boolean
     *
     */

    public function profileUpdate($data)
    {
        return DB::transaction(function () use ($data) {

            if (isset($data['file_photo'])) {
                $file_photo = $data['file_photo'];
                $timestamp = str_replace([' ', ':'], '-', Carbon::now()->toDateTimeString());
                $image = $timestamp . '-' . str_replace([' ', ':'], '-', $file_photo->getClientOriginalName());
                $file_photo->move(public_path('images/users/'), $image);
                $image_url = url('/images/users/') . '/' . $image;
                $data['file_photo'] = $image_url ?? "";

                $user = User::where('id', auth()->user()->id)->update([
                    'image' => $image
                ]);
            }

            if (isset($data['cv'])) {
                $cv = $data['cv'];
                $timestamp = str_replace([' ', ':'], '-', Carbon::now()->toDateTimeString());
                $image = $timestamp . '-' . str_replace([' ', ':'], '-', $cv->getClientOriginalName());
                $cv->move(public_path('images/users/'), $image);
                $image_url = url('/images/users/') . '/' . $image;
                $data['cv'] = $image_url ?? "";

                $user = User::where('id', auth()->user()->id)->update([
                    'cv' => $image
                ]);
            }

            $profileUpdated = User::where('id', auth()->user()->id)->update([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'name' => $data['first_name'] . ' ' . $data['last_name'],
                'address' => $data->address,
                'phone' => $data->phone,
                'country' => $data->country,
                'phone_code' => $data->country_code,
                'interest' => $data->interest,
                'state' => $data->state,
                'city' => $data->city,
                'zip_code' => $data->zip_code,
                'bio' => $data->bio,
                'vision' => $data->vision,
                'no_of_employees' => $data->no_of_employees,
            ]);


            return true;

        });
    }





    // /*
    //  *
    //  * @param User  $user
    //  * @param array  $data
    //  *
    //  * @throws GeneralException
    //  * @return User $user
    //  *
    //  */

    // public function OAuthLogin(array $data)
    // {
    //     return DB::transaction(function () use ($data) {

    //         $authenticated = false;
    //         $user = null;

    //         if (isset($data['phone']) && isset($data['email'])) {
    //             $phone = phoneFormatter($data['phone']);
    //             $user = User::where('phone', $phone['phone'])->where('country_code', $phone['country_code'])->orWhere('email', $data['email'])->first();
    //         }elseif(isset($data['phone'])){
    //             $phone = phoneFormatter($data['phone']);
    //             $user = User::where('phone', $phone['phone'])->where('country_code', $phone['country_code'])->first();
    //         }elseif(isset($data['email'])){
    //             $user = User::where('email', $data['email'])->first();
    //         }

    //         if($user){

    //             if ($data['login_type'] == 'facebook') {
    //                 if(!($user->fb_uid == $data['fb_uid'])){
    //                     // Fb authentication failed
    //                     return null;
    //                 }elseif($user->fb_uid == $data['fb_uid']){
    //                     $authenticated = true;
    //                 }
    //             }elseif($data['login_type'] == 'google'){
    //                 if(!($user->google_uid == $data['google_uid'])){
    //                     // Google authentication failed
    //                     return null;
    //                 }elseif($user->google_uid == $data['google_uid']){
    //                     $authenticated = true;
    //                 }
    //             }

    //             if ($authenticated) {

    //                 //if (config('auth.single_login')) {
    //                 if (true) {
    //                     $delete_devices = UserDevice::where('user_id', $user->id)->delete();

    //                     $user->tokens()->get()->map(function ($token) {
    //                         $token->revoke();
    //                     });
    //                 }

    //                 //update user timezone
    //                  $update_user_timezone = $user->update([
    //                     'timezone' => $data['timezone'],
    //                 ]);
    //                 // Generating Laravel Passport Token
    //                 $token = $user->createToken(env('APP_NAME'))->accessToken;

    //                 $user_device = UserDevice::create([
    //                     'user_id'   =>  $user->id,
    //                     'token'     =>  $token,
    //                     'device_id' =>  $data['device_id'],
    //                     'imei'      =>  $data['imei'],
    //                 ]);

    //                 $user['token'] = $token;
    //                 $user['role'] = $user->getRoles()[0]->slug;
    //                 return $user;
    //             }else{
    //                 return null;
    //             }

    //             //login ends
    //         }elseif(!isset($user)){

    //             // Phone number formatter
    //             $country_code = null;
    //             $phone = null;
    //             if (isset($data['phone'])) {
    //                 $phoneData = phoneFormatter($data['phone']);
    //                 $country_code = $phoneData['country_code'];
    //                 $phone = $phoneData['phone'];
    //             }

    //             $user = new User();
    //             $user->userId          = Carbon::now()->timestamp;
    //             $user->first_name      = isset($data['first_name']) ? $data['first_name'] : null;
    //             $user->last_name       = isset($data['last_name']) ? $data['last_name'] : null;
    //             $user->email           = isset($data['email']) ? $data['email'] : null;
    //             $user->country_code    = $country_code;
    //             $user->phone           = $phone;
    //             $user->confirmation_code = $this->generatePin(6);
    //             $user->login_type      = $data['login_type'];
    //             $user->fb_uid          = isset($data['fb_uid']) ? $data['fb_uid'] : null;
    //             $user->google_uid      = isset($data['google_uid']) ? $data['google_uid'] : null;
    //             $user->fcm_id          = isset($data['fcm_id']) ? $data['fcm_id'] : null;
    //             $user->timezone        = isset($data['timezone']) ? $data['timezone'] : null;
    //             //$user->avatar          = $data['avatar'];
    //             $user->save();

    //             if ($user) {

    //                 $role = config('roles.models.role')::where('slug', 'parent')->first();
    //                 $user->attachRole($role);
    //                 $token = $user->createToken(env('APP_NAME'))->accessToken;
    //                 $get_user = User::whereId($user->id)->first();
    //                 $user = $get_user->toArray();
    //                 $user['role'] = $get_user->getRoles()[0]->slug;
    //                 $user['token'] = $token;

    //                 $user_device = UserDevice::create([
    //                     'user_id'   =>  $user['id'],
    //                     'token'     =>  $token,
    //                     'device_id' =>  $data['device_id'],
    //                     'imei'      =>  $data['imei'],
    //                 ]);

    //                 if ($user['email'] !== null) {
    //                     Mail::to($user['email'])->send(new VerifyMail($user));
    //                     \Log::channel('mysql')->info('User registered by OAuth without verify ' . $user['email']);
    //                 }

    //                 if ($user['phone'] !== null){

    //                     $message_sent = $this->sendMessage($user['phone'], __('messages.verificationMessage', ['code' => $user['confirmation_code']]));

    //                     \Log::channel('mysql')->info('User register by OAuth without verify ' . $user['phone']);
    //                 }

    //                 return $user;
    //             }else{
    //                 return null;
    //             }
    //             // Register Ends
    //         }
    //     });
    // }

    // /*
    //  *
    //  * @param User  $user
    //  *
    //  * @throws GeneralException
    //  * @return Boolean $result
    //  *
    //  */

    // public function logout($user)
    // {
    //     return DB::transaction(function () use ($user) {

    //         $delete_devices = UserDevice::where('user_id', $user->id)/*->where('token', $user->token())*/->delete();
    //         if($delete_devices){
    //             $user->token()->revoke();
    //             return true;
    //         }else{
    //             return false;
    //         }
    //     });
    // }

    // /*
    //  *
    //  * @param Array  $data
    //  *
    //  * @throws GeneralException
    //  * @return $data
    //  *
    //  */

    // public function sendConfirmationCode($data)
    // {
    //     return DB::transaction(function () use ($data) {

    //         $code = $this->generatePin(6);

    //         if (isset($data['phone']) && $data['phone'] !== null){

    //             $message_sent = $this->sendMessage($data['phone'], __('messages.verificationMessage', ['code' => $code]));

    //             \Log::channel('mysql')->info('Confirmation code sent on ' . $data['phone']);

    //             return array('confirmation_code' => $code);
    //         }elseif (isset($data['email']) && $data['email'] !== null) {
    //             $data['confirmation_code'] = $code;
    //             Mail::to($data['email'])->send(new VerifyMail($data));
    //             \Log::channel('mysql')->info('User registered by OAuth without verify ' . $data['email']);

    //             return array('confirmation_code' => $code);
    //         }

    //         return null;
    //     });
    // }

    // /*
    //  *
    //  * @param User  $user
    //  * @param Array  $data
    //  *
    //  * @throws GeneralException
    //  * @return $data
    //  *
    //  */

    // public function createProfile($user, $data)
    // {
    //     return DB::transaction(function () use ($user, $data) {

    //         if ($user->phone !== null) {
    //             unset($data['phone']);
    //             unset($data['country_code']);
    //         }elseif ($user->email !== null){
    //             unset($data['email']);
    //         }

    //         if ($user->hasRole('parent')) {
    //             $data['avatar'] = (strtolower($data['gender']) === 'male') ? 'default_avatar_father.png' :  'default_avatar_mother.png';
    //         }elseif ($user->hasRole('child')) {
    //             $data['avatar'] = (strtolower($data['gender']) === 'male') ? 'default_avatar_son.png' :  'default_avatar_daughter.png';
    //         }

    //         // Phone number formatter
    //         if (isset($data['phone'])) {
    //             $phoneData = phoneFormatter($data['phone']);
    //             $data['country_code'] = $phoneData['country_code'];
    //             $data['phone'] = $phoneData['phone'];
    //         }

    //         $user_updated = $user->update($data);

    //         if ($user_updated) {
    //             $user->markProfileCreated();

    //             $connection_updated = UserConnection::where('connection_id', $user->id)->update([
    //                 'active'    =>  1
    //             ]);

    //             return true;
    //         }

    //         return false;
    //     });
    // }

    // /*
    //  *
    //  * @param User  $user
    //  * @param Array  $data
    //  *
    //  * @throws GeneralException
    //  * @return $data
    //  *
    //  */

    // public function updateUser($user, $data)
    // {
    //     return DB::transaction(function () use ($user, $data) {

    //         if(isset($data['avatar'])){
    //             $data['avatar'] = $this->uploadProfilePic();
    //         }

    //         if (isset($data['phone'])) {
    //             $phoneData = phoneFormatter($data['phone']);
    //             $data['country_code'] = $phoneData['country_code'];
    //             $data['phone'] = $phoneData['phone'];
    //         }

    //         $user_updated = $user->update($data);

    //         if ($user_updated) {
    //             return true;
    //         }

    //         return false;
    //     });
    // }

    /*
     *
     * @param User  $user
     * @param Array  $data
     *
     * @throws GeneralException
     * @return $data
     *
     */

    public function updatePassword($user, $data)
    {
        return DB::transaction(function () use ($user, $data) {
            $user_updated = $user->update(['password' => Hash::make($data['password'])]);

            if ($user_updated) {
                return true;
            }

            return false;
        });
    }

    // /*
    //  * AuthController updateAppSetting.
    //  *
    //  * @param  User   $user
    //  * @param  Array  $data
    //  *
    //  */

    // public function updateAppSetting($user, $data)
    // {
    //     return DB::transaction(function () use ($user, $data) {

    //         $user_updated = $user->update(['app_setting' => json_encode($data)]);

    //         if ($user_updated) {
    //             return true;
    //         }

    //         return false;
    //     });
    // }


    // // Helper functions

    // /*
    //  *
    //  * @param User  $user
    //  * @param Array  $data
    //  *
    //  * @throws GeneralException
    //  * @return $data
    //  *
    //  */

    // public function uploadProfilePic()
    // {
    //     if(request()->hasFile('avatar')){
    //         $imageTempName = request()->file('avatar')->getPathname();
    //         $venue_img_extension = request()->file('avatar')->extension();
    //         $avatar = uniqid() . '.' . $venue_img_extension;
    //         $path = base_path('/public/uploads/profile_pic');
    //         request()->file('avatar')->move($path, $avatar);
    //         return $avatar;
    //     }
    // }


}
