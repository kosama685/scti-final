<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use Illuminate\Http\Request;

//models
use App\Models\PaymentLog;

//Libraries
use App\Http\Controllers\Api\BaseController;


class PaymentLogController extends BaseController
{
    //
    public function index(Request  $request, $id = null)
    {
        $date = !!$request->to &&  $request->to != "null" && $request->from && $request->from != "null";

        if($id != null)
        {
            return PaymentLog::with('program')->where('user_id',$id)->when(!!$date ,function($q) use($request){
                $q->whereBetween('created_at',[Carbon::parse($request->from)->format('Y-m-d'),Carbon::parse($request->to)->format('Y-m-d')]);
            })->paginate($request->page);
        }
        return PaymentLog::with('program')->when(!!$date ,function($q) use($request){
                $q->whereBetween('created_at',[Carbon::parse($request->from)->format('Y-m-d'),Carbon::parse($request->to)->format('Y-m-d')]);
            })->paginate($request->page);
    }
}
