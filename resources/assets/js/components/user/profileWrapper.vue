<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="list-group">
                    <router-link class="list-group-item" activeClass="active" :to="{name:'profile'}">个人信息</router-link>
                    <router-link class="list-group-item" activeClass="active" :to="{name:'edit.profile'}">修改信息</router-link>
                    <!--<li class="list-group-item">-->
                        <!--<router-link>修改密码</router-link>-->
                    <!--</li>-->
                </div>
            </div>
            <div class="col-md-6">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "profile-wraper"
    }
</script>
