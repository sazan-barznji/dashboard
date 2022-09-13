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
                        <div class="dropdown">
                            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                User
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <router-link class="nav-link" :to="{name:'UserProfile'}"> Setting</router-link>
                                </li>
                                <li><a class="nav-link" @click.prevent="logout" href="/">logout </a></li>
                            </ul>
                        </div>

                    </li>
                    <li class="nav-item" v-else>
                        <router-link class="nav-link" :to="{name: 'LoginForm'}">Login </router-link>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default
    {
        name: 'NavBar',
        computed: {
            ...mapGetters({
                authenticated: 'auth/authenticated',
                user: 'auth/user',
            }),
        },
        methods: {
            ...mapActions({
                logoutAction: 'auth/logout'
            }),
            logout() {
                this.logoutAction().then(() => {
                    console.log('logout! ')
                    this.$router.replace({
                        name: 'HomeView'
                    })
                })
            }
        }
    }
</script>