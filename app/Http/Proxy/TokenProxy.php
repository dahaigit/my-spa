<?php
namespace App\Http\Proxy;

use EcareYu\Services\Code;
use EcareYu\Services\UtilService;
use GuzzleHttp\Client;

class TokenProxy
{
    protected $http;

    public function __construct(Client $http)
    {
        $this->http = $http;
    }

    /**
     * 具体登陆逻辑
     * @param $email
     * @param $password
     * @return mixed
     * @author luwei
     * @date ${YEAR}-${MONTH}-${DAY} ${TIME}
     */
    public function login($email, $password)
    {
        //登陆逻辑：1判断用户密码是否正确，2用户是否激活，3通过代理获取token
        if (!auth()->attempt(['email' => $email,'password' => $password])) {
            UtilService::thrownErr(Code::E_AUTH_ERROR);
        }
        if (!auth()->attempt(['email' => $email, 'password' => $password, 'is_active' => 1])) {
            UtilService::thrownErr(Code::E_NOT_ACTIVE);
        }
        $params = [
            'username' => $email,
            'password' => $password,
        ];
        return $this->proxy('password', $params);
    }

    /**
     * 代理，可以登陆和刷新token换取新token
     * @param $grantType
     * @param $params
     * @return mixed
     * @author luwei
     * @date ${YEAR}-${MONTH}-${DAY} ${TIME}
     */
    private function proxy($grantType, $params)
    {
        try {
            $params = array_merge(
                $params,
                [
                    'client_id' => config('passport.client_id'),
                    'client_secret' => config('passport.client_secret'),
                    'grant_type' => $grantType,
                    'scope' => '',
                ]
            );
            $response = $this->http->post(url('oauth/token'), [
                'form_params' => $params
            ]);
            return json_decode((string)$response->getBody(), true);
        } catch (\Exception $exception) {
            throw $exception;
        }
    }
}