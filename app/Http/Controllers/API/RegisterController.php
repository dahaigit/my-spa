<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Http\Controllers\Controller;
use EcareYu\Services\Code;
use EcareYu\Services\UtilService;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends ApiController
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'username' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6',
        ]);
    }

    /**
     * Handle a registration request for the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            "username" => "required|max:255",
            'email' => 'required|unique:users',
            'password' => 'required|min:6',
        ], [
            "username.required" => $this->ruleMsg(Code::E_USERNAME_REQUIRED),
            'username.max' => $this->ruleMsg(Code::E_USERNAME_MAX),
            "email.required" => $this->ruleMsg(Code::E_EMAIL_REQUIRED),
            "email.unique" => $this->ruleMsg(Code::E_EMAIL_UNIQUE),
            "password.required" => $this->ruleMsg(Code::E_PASSWORD_REQUIRED),
            "password.min" => $this->ruleMsg(Code::E_PASSWORD_MIN),
        ]);
        $this->validatorErrors($validator);

        event(new Registered($user = $this->create($request->all())));

        return $this->response('register ok');
    }


    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'username' => $data['username'],
            'email' => $data['email'],
            'password' => $data['password'],
        ]);
    }
}
