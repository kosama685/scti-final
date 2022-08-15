<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;

// Models
use App\Models\Category;

use App\Models\EmployeeBenefits;

// Requests
use App\Http\Requests\Category\CategoryRequest;

//Libraries
use App\Http\Controllers\Api\BaseController;


class CategoryController extends BaseController
{
    public function index(Request $request)
    {
        $date = !!$request->to && !empty($request->from);
        if(!!$date){
            $fromDate = Carbon::parse($request->from)->format('yy-m-d');
            $toDate = Carbon::parse($request->to)->format('yy-m-d');
            return Category::whereBetween('created_at', [$fromDate, $toDate])->paginate($request->entries);
        }
        if(request()->filled('status')){
            return Category::where('status',1)->latest()->paginate($request->entries);
        }
        return Category::latest()->paginate($request->entries);
    }

    public function create(CategoryRequest $request)
    {
    	//dd($request);
        $category = Category::create([
        	'category_name' => $request->category_name,
     		'status' => $request->status
        ]);

        if (isset($category)) {
            return $this->sendResponse($category, __('responseMessages.categoryCreated'));
        }else{
            return $this->sendError(__('responseMessages.errorCreatingCategory'));
        }
    }
    public function update(CategoryRequest $request)
    {
        //dd($request);
        $category = Category::whereId($request->id)->update([
            'category_name' => $request->category_name,
            'status' => $request->status
        ]);

        if (isset($category)) {
            return $this->sendResponse($category, "Category Updated Successfully");
        }else{
            return $this->sendError("Error updating category");
        }
    }

    public function getEmployeeBenefits(){

        $employee_benefits = EmployeeBenefits::get();

        if (isset($employee_benefits)) {
            return $this->sendResponse($employee_benefits, "Category Updated Successfully");
        } else {
            return $this->sendError("Error updating category");
        }
    }


}
