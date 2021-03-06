import jwt from '../../util/storage/jwt'
import API from '../../api'

export default {
    actions:{
        loginRequest({dispatch},formData){
            return axios.post(API.login, formData).then(response => {
                jwt.setAllToken(response.data.meta)
                dispatch('setAuthUser')
            }).catch(error => {
                dispatch('logoutRequest')
            });
        },
        logoutRequest({dispatch},formData){
            return axios.get(API.logout).then(response => {
                jwt.removeAllToken()
                dispatch('unsetAuthUser')
            })
        },
        refreshRequest({dispatch}){
            if (jwt.getRefreshToken()) {
                let formData = {
                    refresh_token : jwt.getRefreshToken()
                }
                jwt.removeAllToken()
                return axios.post(API.refresh,formData).then(response => {
                    jwt.setAllToken(response.data.meta)
                    dispatch('setAuthUser')
                }).catch(error => {
                    dispatch('logoutRequest')
                })
            }
        }
    }
}
