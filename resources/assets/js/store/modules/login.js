import jwt from '../../util/storage/jwt'
import API from '../../api'

export default {
    actions:{
        loginRequest({dispatch},formData){
            return axios.post(API.login, formData).then(response => {
                jwt.setAllToken(response.data.meta)
                dispatch('setAuthUser')
            });
        },
        logoutRequest({dispatch},formData){
            return axios.get(API.logout).then(response => {
                jwt.removeAllToken()
                dispatch('unsetAuthUser')
            })
        },
        refreshRequest({dispatch},formData){
            return axios.post(API.refresh,formData).then(response => {
                jwt.setAllToken(response.data.meta)
                dispatch('setAuthUser')
            })
        }
    }
}
