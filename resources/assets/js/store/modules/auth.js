import * as types from '../mutation-type'
import http from '../../util/http'
export default {
    state: {
        authenticated: false,
        username: null,
        email: null
    },
    mutations:{
        [types.SET_AUTH_USER](state, payload){
            state.authenticated = true
            state.username = payload.user.username
            state.email = payload.user.email
        }
    },
    actions:{
        setAuthUser({commit,dispatch}){
            http.get('/api/user').then(response =>{
                commit({
                    type: types.SET_AUTH_USER,
                    user: response.data
                })
            })
        }
    }
}
