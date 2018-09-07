import jwt from '../../util/storage/jwt'
import API from '../../api'

export default {
    actions:{
        loginRequest({dispatch},formData){
            axios.post(API.login, formData).then(response => {
                jwt.setToken(response.data.meta.access_token)
                dispatch('setAuthUser')
            });
        }
    }
}
