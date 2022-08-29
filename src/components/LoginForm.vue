<template>
    <div class="login container">
        <form @submit.prevent="login" method="post">
            <h1>Login</h1>
            <div>
                <h5>Login for New Account</h5>
                <p>thank you for connecting with us, Login to manage your account</p>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" v-model="data.email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" v-model="data.password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>

</template>
<script>
import axios from 'axios';

export default{
    name:'LoginForm',
    data(){
        return{
            data:{
                email:null,
                password:null
            }
        }
    },
   methods:{
    async login(){
        await axios.post('login',this.data)
        .then((response)=>{console.log(response)})
        .catch((error)=>{console.log(error)});
        console.log("success");
        this.$router.push('/')
    }
   }
}
</script>