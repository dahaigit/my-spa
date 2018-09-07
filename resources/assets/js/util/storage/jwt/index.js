import store from "../index"
export default {
    tokenKey: 'jwt_token',
    refreshTokenKey: 'refresh_token',
    /**
     * 缓存access_token和refresh_token
     * @param data
     */
    setAllToken(data)
    {
        this.setToken(data['access_token'], data['expires_in'])
        store.set(this.refreshTokenKey, data['refresh_token'], 14400)
    },
    setToken(token, duration){
        store.set(this.tokenKey, token, duration)
    },
    getToken(){
        return store.get(this.tokenKey)
    },
    removeToken(){
        store.remove(this.refreshTokenKey)
        store.remove(this.tokenKey)
    }
}
