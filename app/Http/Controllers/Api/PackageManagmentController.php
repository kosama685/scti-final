<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

//Models
use App\Models\PackageManagment;

// Requests
use App\Http\Requests\PackageManagment\CreatePackageRequest;

// Interfaces
use App\Repositories\PackageManagment\PackageManagmentInterface;

//Libraries
use App\Http\Controllers\Api\BaseController;
use App\Models\SubscriptionLog;
use App\Models\Transaction;

class PackageManagmentController extends BaseController
{
	/**
     * PackageManagmentController constructor.
     *
     * @param  PackageManagmentInterface  $packagemanagment
     */
	public function __construct(PackageManagmentInterface $package)
    {
        $this->package = $package;
    }
     /**
     * PackageManagment create.
     *
     * @param  CreatePackageRequest  $request
     */

    public function update(Request $request)
    {
        // $str = $request->packages_id;
        // $my_array = explode(",",$str);

        $package_array       = explode(",", $request->packages_id);
        // return response()->json($package_array);
        $duration_array      = explode(",", $request->duration);
        $charges_array       = explode(",", $request->charges);
        $package_name_array  = explode(",", $request->package_name);
        $des_array           = explode(",", $request->package_description);

        foreach (array_filter($package_array) as $key => $item) {

            PackageManagment::where('id',$item)->update([
                'package_name' => $package_name_array[$key],
                'charges' => $charges_array[$key],
                'duration' => $duration_array[$key],
                'description' => $des_array[$key],
            ]);
            return $this->sendResponse(true, __('messages.success_package'));
        } 

        // $package = $this->package->update($request->only(
        //     'package_name',
        //     'charges',
        //     'package_id',
        //     'package_description'
        // ));

        // if (isset($package)) {
        //     return $this->sendResponse(true, __('messages.success_register'));
        // }

        // return $this->sendError('Unable to register user.');

    }

     /**
     * PackageManagment getPackage.
     *
     * @param  Request  $request
     */

    public function getPackage(Request $request,$id=null)
    {
        

        $userType = (isset($request->user_type)) ? $request->user_type : $id;

    	$package = PackageManagment::where('user_type',$userType)->get();


        if (isset($package)) {
            return $this->sendResponse($package, __('responseMessages.fetchPackageSuccessfully'));
        }

        return $this->sendError(__('responseMessages.errorFetchingPackage'));

    }

    public function previous_package()
    {
        //     $user_id = Auth()->user()->id;
        //     $log = Transaction::where('user_id',$user_id)->first();
        // if (isset($log)) {
            return 'asdasdasd';
            // return $this->sendResponse($log, __('responseMessages.fetchPackageSuccessfully'));
        // }   

    }
}
