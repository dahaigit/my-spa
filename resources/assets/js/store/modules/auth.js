import * as types from '../mutation-type'
import API from '../../api'
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
            axios.get(API.user_info).then(response =>{
                commit({
                    type: types.SET_AUTH_USER,
                    user: response.data
                })
            })
        }
    }
}
