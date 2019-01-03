<?php
/*
 * 创建一个http服务
 */
$http = new swoole_http_server('0.0.0.0', 8811);
// 设置静态资源目录
$http->set([
    'enable_static_handler' => true,
    'document_root' => './public',
]);
$http->on('request', function($request, $response){
    $str = '中文乱码:' . json_encode($request->get);
    $response->end($str);
});
$http->start();




















