<template>
    <div class="container">
        <form aria-label="登陆" @submit.prevent="login">
            <div class="form-group row">
                <label class="col-md-4 col-form-label text-md-right">用户名</label>
                <div class="col-md-6">
                    <input v-validate="{ required: true}"
                           v-model="username"
                           type="email" class="form-control" name="email" >
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
            <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary">
                        修改
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        name: 'profileFrom',
        computed:{
            username:{
                get(){
                    return this.$store.state.auth.username
                }
            },
            email:{
                get(){
                    return this.$store.state.auth.email
                }
            }
        },
    }
</script>
