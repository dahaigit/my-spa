<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">home page</div>
                    <div class="card-body">
                        home page
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$http.get('api/posts').then(function(response){

            })
        }
    }
</script>
