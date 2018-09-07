<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route as FacadesRouter;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('posts', 'PostController');
// 用户注册
Route::post('/register', 'RegisterController@register');

// 用户登录
Route::post('/login', 'LoginController@login');

// 需要登陆才能访问的url
ROute::middleware(['auth:api'])->group(function () {
    // 退出登陆
    Route::get('/logout', 'LoginController@logout');

});;

