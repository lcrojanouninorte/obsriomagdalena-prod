<?php


namespace App\Http\Validators;


use App\Constants;
use App\User;
use Illuminate\Validation\Rule;
use Spatie\Permission\Contracts\Role;
use Validator;

class RequestValidators
{
    public static function userValidator(array $data, $is_super_admin){

//        $req = $is_super_admin ? 'nullable' : 'required';
        $req = 'nullable';
        return Validator::make($data, [
            'email' => 'required|email|unique:users|max:50',
            'phone_number' => 'required|max:13',
            'alternate_phone_number' => 'nullable|max:13',
            'base_role' => ['required', Rule::in(Constants::BASE_ROLE)],
            'password' => 'required|confirmed|string|min:6'
        ]);
    }

    public static function userUpdateValidator(array $data, User $user){

//        $req = $is_super_admin ? 'nullable' : 'required';
        $req = 'nullable';
        return Validator::make($data, [
            'email' => 'sometimes|email|unique:users,email,'.$user->id.'|max:50',
            'phone_number' => 'sometimes|max:13',
            'alternate_phone_number' => 'sometimes|max:13',
            'password' => 'sometimes|confirmed|string|min:6'
        ]);
    }


    public static function standardValidator(array $data){
        return Validator::make($data, [
            'user_id' => 'required|exists:users,id|unique:standards',
            'first_name' => 'required|max:50|min:3|alpha',
            'last_name' => 'required|max:50|min:3|alpha',
            'gender' => ['required', Rule::in(Constants::GENDER)]
        ]);
    }


    public static function adminValidator(array $data){
        return Validator::make($data, [
            'user_id' => 'required|exists:users,id',
            'first_name' => 'required|max:50|min:3|alpha',
            'last_name' => 'required|max:50|min:3|alpha',
            'is_super_admin' => 'sometimes|required|boolean'
        ]);
    }

    public static function updateAdminValidator(array $data){
        return Validator::make($data, [
            'first_name' => 'required|max:50|min:3|alpha',
            'last_name' => 'required|max:50|min:3|alpha',
            'is_super_admin' => 'sometimes|required|boolean'
        ]);
    }

    public static function staffValidator(array $data){
        return Validator::make($data, [
            'user_id' => 'required|exists:users,id|unique:staff',
            'first_name' => 'required|max:50|min:3|alpha',
            'last_name' => 'required|max:50|min:3|alpha',
            'gender' => ['required', Rule::in(Constants::GENDER)]
        ]);
    }

    public static function updateStaffValidator(array $data, User $user){

        return Validator::make($data, [
            'first_name' => 'sometimes|max:50|min:3|alpha',
            'last_name' => 'sometimes|max:50|min:3|alpha',
            'gender' => ['sometimes', Rule::in(Constants::GENDER)]
        ]);
    }

}
