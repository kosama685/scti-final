<?php

namespace App\Http\Controllers\Api;

use App\Models\PackageManagment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

//Models
use App\Models\SubscriptionLog;
use App\Models\Transaction;
//Libraries
use App\Http\Controllers\Api\BaseController;

class SubscriptionController extends BaseController
{
    //
    public function index($id = null,Request $request)
    {
    	$date = !!$request->to_user && !empty($request->from_user);
        $date_business = !!$request->to_business_user && !empty($request->from_business_user);
    	if($id != null){
    		return SubscriptionLog::with(['User','Packages'])->where('user_id',$id)->paginate();
    	}
        if(!!$date){
            $fromDate = Carbon::parse($request->from_user)->format('yy-m-d');
            $toDate = Carbon::parse($request->to_user)->format('yy-m-d');
        }else if(!!$date_business){
            $fromDate = Carbon::parse($request->from_business_user)->format('yy-m-d');
            $toDate = Carbon::parse($request->to_business_user)->format('yy-m-d');
        }


        if(!!$date || !! $date_business){

    	   return SubscriptionLog::with(['User','Packages'])
        //    ->whereBetween('created_at', [$fromDate, $toDate])
            ->whereDate('created_at', '>=', $request->from_user)
            ->whereDate('created_at', '<=', $request->to_user)
           ->where('user_type',$request->user_type)->paginate($request->entries);
        }

    	return SubscriptionLog::with(['User','Packages'])->where('user_type',$request->user_type)->paginate();
    }
      //updateUserPackage
    public function updateUserPackage(Request $request)
    {
        
        $package = PackageManagment::where('id',$request->package)->first();
        $newDateTime = Carbon::now()->addDay(30);
        // dd($package);

        $stripe = $this->stripe($request->card_number, $request->expiry_date, $request->cvv, $package->charges);
        
        if ($stripe['paid']) {
            $subscriptionslog = SubscriptionLog::create([
                'package_id' => $request->package,
                'user_id' => auth()->user()->id,
                'expiry_date' => $newDateTime,
                'charges' => $package->charges,
                'user_type' => 1
            ]);

            Transaction::create([
                'order_date'        => carbon::now(),
                'order_id'          => auth()->user()->id,
                'transaction_id'    => $stripe->id,
                'amount'            => $stripe->amount,
                'payment_method'    => 'stripe',
                'status'            => 1
            ]);

            return $this->sendResponse(true, 'Package Update Successfully');
        }

        return $this->sendError('Unable to register user.');
    }

    public function getCurrentUserPackage(Request $request)
    {
        $subscriptionsLog = new SubscriptionLog();
        $date = !!$request->to && !empty($request->from);

        if(!!$date) {
            $fromDate = Carbon::parse($request->from)->format('Y-m-d');
            $toDate = Carbon::parse($request->to)->format('Y-m-d');
            return $subscriptionsLog->whereBetween('created_at', [$fromDate, $toDate])->with(['User','Packages'])->where('user_id',auth()->user()->id)->latest()->paginate();
        }
        //dd($subscriptionsLog);
        return $subscriptionsLog->with(['User','Packages'])->where('user_id',auth()->user()->id)->latest()->paginate();
    }


    public function invoice($id){
       
        $invoice_view = SubscriptionLog::with('User', 'Packages')->where('id',$id)->first();
        return response()->json($invoice_view);
    }
}
