<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">注册</div>

                    <div class="card-body">
                        <form aria-label="注册" @submit.prevent="register">
                            <div class="form-group row">
                                <label for="username" class="col-md-4 col-form-label text-md-right">名称</label>

                                <div class="col-md-6">
                                    <input id="username" v-model="username" type="text" class="form-control" name="username" required autofocus>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email"  class="col-md-4 col-form-label text-md-right">邮箱</label>

                                <div class="col-md-6">
                                    <input id="email" v-model="email" type="email" class="form-control" name="email"  required>

                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">密码</label>

                                <div class="col-md-6">
                                    <input id="password" v-model="password" type="password" class="form-control" name="password" required>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password-confirm" class="col-md-4 col-form-label text-md-right">再次输入密码</label>

                                <div class="col-md-6">
                                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
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
        methods:{
            data(){
                return {
                    username: '',
                    email: '',
                    password: '',
                }
            },
            register:function(){
                let formData = {
                    username : this.username,
                    email : this.email,
                    password : this.password,
                }
                let that = this
                this.$http.post('/api/register', formData).then(function(response){
                    that.$router.push({name:"registerConfirm"})

                });
            }
        }
    }
</script>
