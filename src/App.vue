<template>
  <div id="app">
    <NavBar/>
    <!-- <router-link class="nav-link" :to="{name: 'LoginForm'}">Login </router-link> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
<script>
  import NavBar from './components/NavBar.vue'
  export default{
    name: 'App',
    components:{
      NavBar
    }
  }
</script>
