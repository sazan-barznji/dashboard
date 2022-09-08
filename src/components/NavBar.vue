<template>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container-fluid">
            <router-link class="navbar-brand" :to="{name:'DashBoard'}">DashBoard</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'HomeView'}">Home </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'about'}">About </router-link>
                    </li>
                    <li class="nav-item" v-if="authenticated">
                        <!-- <router-link class="nav-link" :to="{name: 'about'}">Signout </router-link> -->
                        <a class="nav-link"  href="/">logout </a>
                    </li>
                    <li class="nav-item" v-else >
                        <router-link class="nav-link" :to="{name: 'LoginForm'}">Login </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import { mapGetters } from 'vuex';
export default
{
    name: 'NavBar',
    computed:{
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
        })
    },  
}
</script>