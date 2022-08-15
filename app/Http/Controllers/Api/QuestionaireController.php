<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

//Models
use App\Models\Questionaire;
// Requests
use App\Http\Requests\Questionaire\QuestionaireRequest;

//Libraries
use App\Http\Controllers\Api\BaseController;

class QuestionaireController extends BaseController
{
    //
    public function index(){
    	return Questionaire::paginate();
    }
    public function create(QuestionaireRequest $request)
    {
		for ($i=0; $i < count($request->toArray()); $i++) {
			Questionaire::create([
				'questions' => $request[$i]['questions'],
				'answer_type' => $request[$i]['answer_type'],
				'answers' => json_encode($request[$i]['values'])
			]);
		}
        return $this->sendResponse(true, __('responseMessages.addQuestion')); 
    }
}
