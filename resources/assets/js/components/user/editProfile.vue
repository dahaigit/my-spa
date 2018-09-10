<template>
    <div class="container">
        <div class="panel panel-default">
            <div class="panel-body">
                <profile-form></profile-form>
            </div>
        </div>
    </div>
</template>
<script>
    import profileForm from './profileForm'
    export default {
        name: 'edit-profile',
        components: {
            profileForm
        }
    }
</script>
