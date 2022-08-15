<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
            'email'        => ['required','unique:users,email'],
            'password'     => ['required','string','min:6'],
            'role'         => ['required','string'],
            // 'address'      => ['sometimes','required','string'],
            'country'      => ['sometimes','required','string'],
            'city'         => ['sometimes','required','string'],
            'zip_code'     => ['sometimes','required','string'],
        ];
    }
}
