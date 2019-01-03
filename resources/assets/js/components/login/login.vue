<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">登陆</div>
                    <div class="card-body">
                        <form aria-label="登陆" @submit.prevent="login">
                            <div class="form-group row">
                                <label class="col-md-4 col-form-label text-md-right">邮箱</label>
                                <div class="col-md-6">
                                    <input v-validate="{ required: true, email: true}"
                                           v-model="email"
                                           type="email" class="form-control" name="email" >
                                    <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-4 col-form-label text-md-right">密码</label>
                                <div class="col-md-6">
                                    <input v-model="password"
                                           v-validate="{ required: true, min: 6 }"
                                           type="password" class="form-control" name="password" >
                                    <span v-show="errors.has('password')">{{ errors.first('password') }}</span>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <img src="http://mauto.com/img/baidu_jgylogo3.gif" alt="">
                                    <button type="submit" class="btn btn-primary">
                                        登陆
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import jwt from '../../util/storage/jwt/index'
    export default {
        data(){
            return {
                email: '',
                password: '',
            }
        },
        methods:{
            login() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        let formData = {
                            email : this.email,
                            password : this.password,
                        }
                        this.$store.dispatch('loginRequest', formData).then(response=>{
                            this.$router.push("profile")
                        })
                        return;
                    }
                });
            }
        }
    }
</script>
