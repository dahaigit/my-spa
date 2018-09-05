<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">注册</div>

                    <div class="card-body">
                        <form aria-label="注册" @submit.prevent="register">
                            <div class="form-group row">
                                <label class="col-md-4 col-form-label text-md-right">名称</label>
                                <div class="col-md-6">
                                    <input v-model="username"
                                           v-validate="{ required: true}"
                                           type="text" class="form-control"
                                           name="username">
                                    <span v-show="errors.has('username')">{{ errors.first('username') }}</span>
                                </div>
                            </div>

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

                            <div class="form-group row">
                                <label class="col-md-4 col-form-label text-md-right">再次输入密码</label>
                                <div class="col-md-6">
                                    <input
                                        v-validate="{ required: true, min: 6 , confirmed: password }"
                                        type="password" class="form-control" name="password_confirmation">
                                    <span v-show="errors.has('password_confirmation')">{{ errors.first('password_confirmation') }}</span>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        注册
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
    export default {
        data(){
            return {
                username: '',
                email: '',
                password: '',
            }
        },
        methods:{
            register() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        let formData = {
                            username : this.username,
                            email : this.email,
                            password : this.password,
                        }
                        let that = this
                        this.$http.post('/api/register', formData).then(function(response){
                            that.$router.push({name:"registerConfirm"})
                        });
                        return;
                    }
                });
            }
        }
    }
</script>
