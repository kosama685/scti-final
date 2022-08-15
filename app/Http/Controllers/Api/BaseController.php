<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
// use Ixudra\Curl\Facades\Curl;

// use LaravelFCM\Message\OptionsBuilder;
// use LaravelFCM\Message\PayloadDataBuilder;
// use LaravelFCM\Message\PayloadNotificationBuilder;
// use FCM;
// // Models
use App\Models\Notification;

class BaseController extends Controller
{
    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendResponse($result = 'null', $message , $code = 200)
    {
        $response = [
            'status'  => 'Success',
            'code'    =>  $code,
            'message' => $message ?? null,
            'data'    => $result,
        ];

        return response($response, 200);
    }


    /**
     * return error response.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendError($errorMessages, $errors = null, $code = 422)
    {
        $response = [
            'status'  => 'Failed',
            'code'    => $code,
            'message' => $errorMessages,
            'data'    => $errors,
        ];

        return response($response, $code);
    }

    public function generatePin($digits){

        $i = 0; //counter
        $pin = ""; //our default pin is blank.
        while($i < $digits){
            //generate a random number between 0 and 9.
            $pin .= mt_rand(0, 9);
            $i++;
        }
        return $pin;
    }

    public function generateRandomString($length = 10) {

        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    // public function sendMessage($phone, $message) {

    //    //JAZZ OTP
    //     $data = Array();
    //     $data['number'] = $phone;
    //     $data['message'] = $message;
    //     $data['token'] = 'SVgRfDn0h%yxDo&$';
    //     $data['appname'] = 'symmetry';
    //     $data['masking'] = 'Symmetry';

    //     $OTPResponse = Curl::to('https://symmetrydigital-labs.com/SMSsms_pushPUSH_75160/sendMsg.php')
    //     ->withData($data)->post();
    //     return $OTPResponse;
    // }public function sendNotification($tokens, $title, $body, $dataArray)
    // {
    //     $optionBuilder = new OptionsBuilder();
    //     $optionBuilder->setTimeToLive(1);

    //     $notificationBuilder = new PayloadNotificationBuilder($title);
    //     $notificationBuilder->setBody($body);

    //     $dataBuilder = new PayloadDataBuilder();
    //     $dataBuilder->addData($dataArray);

    //     $option = $optionBuilder->build();
    //     $notification = $notificationBuilder->build();
    //     $data = $dataBuilder->build();
    //     $downstreamResponse = FCM::sendTo($tokens, $option, $notification, $data);

    //     if($downstreamResponse->numberSuccess()){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    // public function sendDataMessage($tokens, $dataArray)
    // {
    //     $optionBuilder = new OptionsBuilder();
    //     $optionBuilder->setTimeToLive(1);

    //     $dataBuilder = new PayloadDataBuilder();
    //     $dataBuilder->addData($dataArray);

    //     $option = $optionBuilder->build();
    //     $data = $dataBuilder->build();
    //     $downstreamResponse = FCM::sendTo($tokens, $option, null, $data);

    //     if($downstreamResponse->numberSuccess()){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    public function createNotification($notificable_id, $notificable_type, $title, $body, $data, $notiticationType){

        $notification = Notification::create([
            'title'             =>  $title,
            'body'              =>  $body,
            'notifiable_type'   =>  $notificable_type,
            'notifiable_id'     =>  $notificable_id,
            'data'              =>  $data,
            'type' =>  $notiticationType,
        ]);

        if(isset($notification->id)){
            return true;
        }else{
            return false;
        }
    }
    public function uploadFile()
    {
       if(request()->hasFile('file')){
           $imageTempName = request()->file('file')->getPathname();
           $venue_img_extension = request()->file('file')->extension();
           $file = uniqid() . '.' . $venue_img_extension;
           $path = base_path('/public/uploads/jobs/video');
           request()->file('file')->move($path, $file);
           return $file;
       }
   }
}
