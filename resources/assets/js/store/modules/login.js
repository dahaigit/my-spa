import jwt from '../../util/storage/jwt'

export default {
    actions:{
        loginRequest({dispatch},formData){
            axios.post('/api/login', formData).then(response => {
                jwt.setToken(response.data.meta.access_token)
                dispatch('setAuthUser')
            });
        }
    }
}
