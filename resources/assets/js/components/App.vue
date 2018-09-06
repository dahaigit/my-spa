<template>
    <div>
        <top-nav></top-nav>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import topNav from './common/topNav.vue'
    import jwt from '../util/storage/jwt'
    export default {
        created(){
            if (jwt.getToken()) {
                this.$store.dispatch('setAuthUser')
            }
        },
        components:{
            topNav
        }
    }
</script>
