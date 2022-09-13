<template>
    <div>
        <h1>user profile</h1>
        <h2>{{userId}}</h2>
    </div>

</template>
<script>
export default {
    name: 'UserProfile',
    data() {
        return {
            userId: this.$route.params.userId
        }
    },
    methods: {
        checkID() {
            this.userId = this.$route.params.userId
        }
    },
    watch:{
        $route: 'checkID'
    }
}
</script>