<template>
    <div class="container">
        <ul class="list-group">
            用户名
            <br>
            <h4> {{user.username}} </h4>
        </ul>
        <ul class="list-group">
            邮箱
            <br>
            <h4> {{user.email}} </h4>
        </ul>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    export default {
        name: 'profile',
        computed:{
            ...mapState({
                user: state => state.auth
            })
        },
    }
</script>
