import store from "../index"
import refreshToken from './refreshToken'
export default {
    tokenKey: 'jwt_token',
    setAllToken(data)
    {
        this.setToken(data['access_token'], data['expires_in'])
        refreshToken.setToken(data['refresh_token'])
    },
    setToken(token, duration){
        return store.set(this.tokenKey, token, duration)
    },
    getToken(){
        return store.get(this.tokenKey)
    },
    removeToken(){
        refreshToken.removeToken()
        return store.remove(this.tokenKey)
    }
}
