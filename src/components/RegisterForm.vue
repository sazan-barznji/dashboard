<template>
    <div class="register container">
        <form @submit.prevent="createUsers" method="post">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" required v-model="data.name">
            </div>
            <div class="mb-3">
                <label for="Email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" v-model="data.email" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" v-model="data.password">
            </div>
            <div class="mb-3">
                <label for="c_password" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="c_password" v-model="data.c_password">
            </div>   
            <button type="submit" class="btn btn-primary">Register</button>
        </form>

    </div>
</template>
<script>
  import  axios from 'axios'
export default {
//   name: 'RegisterForm',
  data(){
    return{
        data:{
            name: null,
            email:null,
            password:null,
            c_password:null
        }
    }
  },
    methods:{
        async createUsers(){
           await axios.post('http://127.0.0.1:8000/api/register',this. data)
            .then((resp)=>{this.data=resp})
            .catch((error)=>{
                console.log(error)
            });
            this.$router.push('/about')
        }
    }
}
</script>