import jwt from '../../util/storage/jwt'
import http from '../../util/http'

export default {
    actions:{
        loginRequest({dispatch},formData){
            http.post('/api/login', formData).then(response => {
                jwt.setToken(response.data.meta.access_token)
                dispatch('setAuthUser')
            });
        }
    }
}
