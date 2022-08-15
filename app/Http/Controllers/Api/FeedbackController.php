<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

//Models
use App\Models\Feedback;

//Libraries
use App\Http\Controllers\Api\BaseController;

class FeedbackController extends BaseController
{
    //

    public function index(Request $request)
    {
        // return "asdsd
        $hasDate = !!$request->to && !empty($request->from);

        if($hasDate){
            $fromDate = Carbon::parse($request->from)->format('Y-m-d');
            $toDate = Carbon::parse($request->to)->format('Y-m-d');
        }

        

        return Feedback::when(!!$hasDate,function($q) use($request){
            $q->whereBetween('created_at', [$fromDate, $toDate]);
        })->paginate($request->entries);

    }
}
