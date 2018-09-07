<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">{{post.title}}</div>
                    <div class="card-body">
                        {{post.body}}
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
                post: {}
            }
        },
        mounted() {
            let that = this
            axios.get(API.posts_info + this.$route.params.id).then(function(response) {
                that.post = response.data.meta
            })
        }
    }
</script>
