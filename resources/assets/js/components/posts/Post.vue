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
    export default {
        data(){
            return {
                post: {}
            }
        },
        mounted() {
            let that = this
            this.$http.get('api/posts/' + this.$route.params.id).then(function(response) {
                that.post = response.data.meta
            })
        }
    }
</script>
