<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">article lists</div>
                    <div class="card-body" v-for="post in posts">
                        <router-link :to="{ name: 'posts', params: { id: post.post_id }}">{{post.title}}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import API from '../../api'
    export default {
        data(){
            return {
                posts: []
            }
        },
        mounted() {
            let that = this
            axios.get(API.posts_list).then(function(response){
                that.posts = response.data.meta.rows
            })
        }
    }
</script>
