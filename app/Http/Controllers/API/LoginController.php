<?php

namespace App\Http\Controllers\API;

use App\Http\Proxy\TokenProxy;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class LoginController extends ApiController
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    protected $proxy;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(TokenProxy $proxy)
    {
        $this->middleware('guest')->except('logout');
        $this->proxy = $proxy;
    }

    /**
     * user login
     * @author luwei
     * @date ${YEAR}-${MONTH}-${DAY} ${TIME}
     */
    public function login(Request $request)
    {
        $email = $request->email;
        $password = $request->password;
        $data = $this->proxy->login($email, $password);
        // 把刷新token 设置到cookie中
        // todo Cookie::queue();

        return $this->response('login ok', $data);
    }
}
