<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">大海网络</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">首页 <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">关于</router-link>
                </li>
            </ul>
            <ul class="navbar-nav my-2 my-lg-0">
                <li class="nav-item" v-if="!user.authenticated">
                    <router-link class="nav-link navbar-dark" to="/login">登陆</router-link>
                </li>
                <li class="nav-item" v-if="!user.authenticated">
                    <router-link class="nav-link navbar-dark" to="/register">注册</router-link>
                </li>
                <li class="nav-item" v-if="user.authenticated">
                    <router-link class="nav-link navbar-dark" to="/profile">个人中心</router-link>
                </li>
                <li class="nav-item" v-if="user.authenticated">
                    <a class="nav-link navbar-dark" href="#">退出</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed:{
            ...mapState({
                user: state => state.auth
            })

        }
    }
</script>
