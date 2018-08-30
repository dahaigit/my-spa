import axios from 'axios'

let http = axios.create({
    basePath: 'http://spa.com',
    timeout: 1000,
    // 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json', // 默认的
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 发送请求以前带着token
    config.headers['Authorization'] = '1234';
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default http
