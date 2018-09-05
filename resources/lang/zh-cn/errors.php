<?php
/**
 * 错误信息.
 * User: Yikai Yu
 * Date: 2017/9/27
 * Time: 18:07
 */

use \EcareYu\Services\Code;

return [
    Code::R_OK => '请求成功',

    // 用户注册
    Code::E_USERNAME_REQUIRED => '用户名不能为空',
    Code::E_USERNAME_MAX => '用户名最大%s个字符',
    Code::E_EMAIL_REQUIRED => '邮箱不能为空',
    Code::E_EMAIL_UNIQUE => '邮箱已经被占用',
    Code::E_PASSWORD_REQUIRED => '密码不能为空',
    Code::E_PASSWORD_MIN => '密码最少%s位',
];
