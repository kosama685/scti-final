<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

//Models
use App\Models\Employee;
use App\Models\InstituteManagment;

//Libraries
use App\Http\Controllers\Api\BaseController;

class EmployeeController extends BaseController
{

    //
    public function index(Request $request)
    {
        $hasInstitute = !!$request->institute && !empty($request->institute);

        if(!$hasInstitute && empty($request->package)){
    	   return Employee::with('Institute')->where('block_status',0)->paginate($request->entries);
        }

        return Employee::with('Institute')->when(!!$hasInstitute,function($q) use($request){
            $q->where('institute_id',$request->institute);
        })->when(!!$request->package,function($q) use($request){
            $q->where('package_id',$request->package);
        })->where('block_status',0)->paginate($request->entries);
    }

    public function statics()
    {
        return array(
            'employeeCount' => Employee::count(),
            'instituteCount' => InstituteManagment::count()
        );
    }
     /**
     * AuthController getProfile.
     *
     * @param  Request $request
     */
    public function getBlockedEmployee(Request $request)
    {

       return Employee::where('block_status',1)->paginate($request->entries);

    }/**
     * AuthController getProfile.
     *
     * @param  Request $request
     */
    public function getEmployee($id)
    {

       return Employee::whereId($id)->first();

    }
    /**
     * AuthController blockUser.
     *
     * @param  Request $request
     */
    public function blockedEmployee(Request $request)
    {
        Employee::whereId($request->id)->update([
            'block_status' => 1
        ]);
        return $this->sendResponse(true, __('responseMessages.blockUser')); 
    }
    /**
     * AuthController blockUser.
     *
     * @param  Request $request
     */
    public function unBlockedEmployee(Request $request)
    {
        Employee::whereId($request->id)->update([
            'block_status' => 0
        ]);
        return $this->sendResponse(true, __('responseMessages.unblockUser')); 
    }
     /**
     * AuthController editEmployee.
     *
     * @param  $id
     */
    public function editEmployee($id)
    {

       return Employee::whereId($id)->first();

    }
    /**
     * AuthController editEmployee.
     *
     * @param  $id
     */
    public function employee_update(Request $request)
    {
        if(isset($request->file_photo)){
                $file_photo = $request->file_photo;
                $timestamp  = str_replace([' ', ':'], '-', Carbon::now()->toDateTimeString());
                $image   = $timestamp.'-'.str_replace([' ', ':'], '-', $file_photo->getClientOriginalName());
                $file_photo->move( public_path('images/users/'), $image );
                $image_url = url('/images/users/').'/'.$image;
                $request->file_photo = $image_url ?? "";

                $user = Employee::where('id',$request->id)->update([
                    'image' => $image
                ]);
            }

            $employeeUpdated = Employee::where('id',$request->id)->update([
                'first_name' => $request->first_name,
                'last_name'  => $request->last_name,
                'address' => $request->address,
                'phone' => $request->phone_number,
                'country' => $request->country,
                'phone_code' => $request->country_code,
                'state' => $request->state,
                'city' => $request->city,
                'zip_code' => $request->zip_code,
            ]);

            if($employeeUpdated){
                return $this->sendResponse(true, __('responseMessages.updateEmployee')); 
            }
        return $this->sendError(__('responseMessages.errorUpdateEmployee'));
    }
}
