<?php

namespace App\Http\Requests\Job;

use Illuminate\Foundation\Http\FormRequest;

class CreateJobRequest extends FormRequest
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
            // 'category_id' => ['required'],
            'job_title' => ['required'],
            'company_name' => ['required'],
            // 'salary_range' => ['required'],
            'period_of_employment' => ['required'],
            // 'hours_of_work' => ['required'],
            'address' => ['required'],
            'country' => ['required'],
            // 'state' => ['required'],
            'city' => ['required'],
            'zip_code' => ['required'],
            'job_descriptions' => ['required'],
            'years_of_experience' => ['required'],
            'degree' => ['required'],
            // 'skill' => ['required'],
        ];
    }
}
