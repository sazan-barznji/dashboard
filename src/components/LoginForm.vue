<template>
    <div class="login container-fluid">
        <div class="row">

            <div class="col form">
                <form @submit.prevent="login" method="post">
                    <h1>Login</h1>
                    <br>
                    <div>
                        <h5>Login to Access Your DashBoard</h5>
                        <p>thank you for connecting with us, Login to manage your buisness</p>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" v-model="user.email">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" v-model="user.password">
                    </div>
                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary" :disabled="!user.email && user.password">Submit</button>
                    </div>
                    <p>Don't Have an Account? <router-link :to="{name:'RegisterForm'}"> Register</router-link>
                    </p>
                </form>
            </div>

            <div class="col  img">
            </div>

        </div>


    </div>

</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'LoginForm',
    data() {
        return {
            user: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        ...mapActions({
            signin: 'auth/signin'
        }),
        login() {
            this.signin(this.user);
            this.$router.push({ name: 'DashBoard' })
        }
    }
}
</script>
<style scoped>
.login {
    height: 100vh;
    background-color: #ecf7fb;
}

.img {
    background-image: url("https://cdni.iconscout.com/illustration/premium/thumb/front-end-developer-doing-web-designing-4152245-3444401.png");
    background-position: center;
    background-repeat: no-repeat;
    /* background-size: cover; */
    /* position: relative; */
    height: 100vh;
}

.form {
    display: flex;
    justify-content: center;
}

form {
    margin: auto;
}


@media only screen and (max-width: 800px) {
    .img {
        display: none;
    }
}
</style>