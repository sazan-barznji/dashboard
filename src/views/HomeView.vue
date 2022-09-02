<template>
  <div class="home">
    <h1>Home Page </h1>
    <h2 v-if="user"> Hi, {{  user[1].name  }} </h2>
    <h2 v-if="!user"> we dont know your name</h2>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">name</th>
          <th scope="col">email</th>
        </tr>
      </thead> 
      <tbody>
        <tr v-for="u in user" :key="u.id">
          <th scope="row">{{u.id}}</th>
          <td>{{  u.name  }}</td>
          <td>{{  u.email  }}</td>
        </tr>
      </tbody>
    </table>


  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
import axios from 'axios';
export default {
  name: 'HomeView',
  components: {

  },
  data() {
    return {
      user: null
    }
  },
  async created() {
    const response = await axios.get('user')
    .then((response) =>{ this.user= response.data})
    .catch((error)=>console.log(error));

    console.log(response);

    // this.$store.dispatch('user', response.data)

  },
  // computed: {
  //   // ...mapGetters(['user'])
  // }

}
</script>
