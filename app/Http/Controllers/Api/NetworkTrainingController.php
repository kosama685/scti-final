<?php

namespace App\Http\Controllers\Api;

use App\Models\RegisterNetworkingTrainingUser;
use Carbon\Carbon;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// Models
use App\Models\NetworkTraining;

// Requests
use App\Http\Requests\Category\CategoryRequest;

//Libraries
use App\Http\Controllers\Api\BaseController;

class NetworkTrainingController extends BaseController
{
    public function index(Request $request)
    {
         $date = !!$request->to && !empty($request->from);
        if(!!$date){
            $fromDate = Carbon::parse($request->from)->format('Y-m-d');
            $toDate = Carbon::parse($request->to)->format('Y-m-d');
            //dd($fromDate);
            return NetworkTraining::whereBetween('created_at', [$fromDate, $toDate])->paginate($request->entries);
        }
        return NetworkTraining::paginate($request->entries);
    }

    public function create(Request $request)
    {
    	//dd($request);
        $NetworkTraining = NetworkTraining::create([
        	'program_name' => $request->program_name,
     		'time' => $request->time,
     		'date' => $request->date,
     		'charges' => $request->charges,
     		'venue' => $request->venue,
     		'description' => $request->description,
        ]);

        if (isset($NetworkTraining)) {
            return $this->sendResponse($NetworkTraining, __('responseMessages.categoryCreated'));
        }else{
            return $this->sendError(__('responseMessages.errorCreatingCategory'));
        }
    }

    public function update(Request $request)
    {
        //dd($request->date);
        $NetworkTraining = NetworkTraining::whereId($request->id)->update([
            'program_name' => $request->program_name,
            'time' => $request->time,
            'date' => $request->date,
            'charges' => $request->charges,
            'venue' => $request->venue,
            'description' => $request->description,
        ]);

        if (isset($NetworkTraining)) {
            return $this->sendResponse($NetworkTraining, "Network Training Updated Successfully");
        }else{
            return $this->sendError("Error Updating Network Training Program");
        }
    }

    public function getById($id)
    {
        $networkingTraining = NetworkTraining::with('register')->whereId($id)->get();

        return $networkingTraining;
    }

    public function registerNetworkTraining($networkTrainingId)
    {
        RegisterNetworkingTrainingUser::create([
           'network_training_id' => $networkTrainingId,
            'user_id'            => auth()->user()->id
        ]);

        return true;
    }



}
