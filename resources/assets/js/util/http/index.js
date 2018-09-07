import axios from 'axios'
import jwt from '../storage/jwt'

axios.install = (Vue) => {
    Vue.prototype.$axios = axios
}

axios.defaults.headers.common = {
    basePath: 'http://spa.com',
    timeout: 30000,
    // 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json', // 默认的
}


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 发送请求以前带着token
    config.headers['Authorization'] = jwt.getToken() ? 'Bearer ' + jwt.getToken() : '';
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default axios
