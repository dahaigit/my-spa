export default {
    tokenKey: 'jwt_token',
    setToken(token){
        window.localStorage.setItem(this.tokenKey, token)
    },
    getToken(){
        return window.localStorage.getItem(this.tokenKey)
    },
    removeToken(){
        window.localStorage.removeItem(this.tokenKey)
    }
}
