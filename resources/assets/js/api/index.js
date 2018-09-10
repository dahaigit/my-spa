/**
 * 所有请求统一管理
 * @type
 */

const API = {
    login:          'api/login',   // 用户登陆
    user_info:      'api/user',    // 用户详情
    register:       'api/register',// 用户注册
    logout:         'api/logout',  // 退出登陆
    refresh:        'api/refresh', // 刷新token换取token
    posts_list:     'api/posts',   // 文章列表
    posts_info:     'api/posts/',  // 文章列表


}

export default API

