<?php

namespace App\Http\Requests\Questionaire;

use Illuminate\Foundation\Http\FormRequest;

class QuestionaireRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'questions'  => ['required'],
            'answer_type' => ['required'], 
            'answers'  => ['required'],
        ];
    }
}
