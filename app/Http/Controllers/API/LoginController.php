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
     * 用户登陆
     * @author luwei
     * @date ${YEAR}-${MONTH}-${DAY} ${TIME}
     */
    public function login(Request $request)
    {
        $email = $request->email;
        $password = $request->password;
        $data = $this->proxy->login($email, $password);
        return $this->response('登陆成功', $data);
    }

    /**
     * 用户退出
     * @author luwei
     * @date ${YEAR}-${MONTH}-${DAY} ${TIME}
     */
    public function logout()
    {
        $this->proxy->logout();
        return $this->response('tui');
    }

    /**
     * 使用刷新token换取accessToken
     * @author luwei
     * @date ${YEAR}-${MONTH}-${DAY} ${TIME}
     */
    public function refresh(Request $request)
    {
        //refresh_token
        $data = $this->proxy->refresh($request->refresh_token);
        return $this->response('刷新登陆成功', $data);
    }
}
