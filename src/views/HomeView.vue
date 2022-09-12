<template>
  <div class="home">
    <h1>Home Page </h1>
    <h2 v-if="authenticated"> Your are authenticated</h2>
    <h2 v-else>You are not authenticated!</h2>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default{
    name: 'HomeView',
    computed:{
      ...mapGetters({
        authenticated: 'auth/authenticated'
      })
    }
  }
</script>
