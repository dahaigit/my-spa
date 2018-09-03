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
    export default {
        components:{
            topNav
        }
    }
</script>
