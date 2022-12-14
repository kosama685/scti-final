<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AuthProfileUpdateRequest extends FormRequest
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
        'first_name' => ['required'],
        'last_name' => ['required'],
        'address' => ['required'],
        'phone' => ['required'],
        'country' => ['required'],
        'state' => ['required'],
        'city' => ['required'],
        'zip_code' => ['required'],
        ];
    }
}
