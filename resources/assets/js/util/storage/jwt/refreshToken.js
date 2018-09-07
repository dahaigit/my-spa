import store from "../index"
export default {
    tokenKey: 'refresh_token',
    /**
     * 设置刷新token单位秒
     * @param token
     * @param duration
     * @returns {*}
     */
    setToken(token, duration = 14400){
        // 默认设置10天有效
        return store.set(this.tokenKey, token, duration)
    },
    getToken(){
        return store.get(this.tokenKey)
    },
    removeToken(){
        return store.remove(this.tokenKey)
    }
}
