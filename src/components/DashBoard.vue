<template>
    <div class="home">
        <h1>New Page</h1>
        <h2 v-if="user"> Hi, {{ user.name }} </h2>
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
                    <th scope="row">{{ u.id }}</th>
                    <td>{{ u.name }}</td>
                    <td>{{ u.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'DashBoard',
    computed:{
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
        })
    },  
}
</script>
  