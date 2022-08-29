<template>
    <div class="register container">

        <form @submit.prevent="createUsers" method="post">
            <h1>Register</h1>
            <div>
                <h5>Register for New Account</h5>
                <p>thank you for connecting with us, sign up to manage your account</p>
            </div>
            <p></p>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" required v-model="data.name" :class="{ 'is-invalid': isValid && $v.data.name.$error }">
                <div v-if="isValid && !$v.data.name.required" class="invalid-feedback">Name is required</div>
            </div>
            <div class="mb-3">
                <label for="Email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="Email" v-model="data.email" required :class="{ 'is-invalid': isValid && $v.data.email.$error }">
                <div v-if="isValid && $v.data.email.$error" class="invalid-feedback">
                    <span v-if="!$v.data.email.required">Email is required</span>
                    <span v-if="!$v.data.email.email">Email is not valid</span>
                </div>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" required v-model="data.password" :class="{ 'is-invalid': isValid && $v.data.password.$error }">
                <div v-if="isValid && $v.data.password.$error" class="invalid-feedback">
                    <span v-if="!$v.data.password.required">Password field is required</span>
                    <span v-if="!$v.data.password.minLength">Maxium 8 characters allowed</span>
                </div>
            </div>
            <div class="mb-3">
                <label for="c_password" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="c_password" required v-model="data.c_password" :class="{ 'is-invalid': isValid && $v.data.c_password.$error }" />
                <div v-if="isValid && $v.data.c_password.$error" class="invalid-feedback">
                    <span v-if="!$v.data.c_password.required">Confirm Password field is required</span>
                    <span v-else-if="!$v.data.c_password.sameAsPassword">Passwords should be matched</span>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>

    </div>
</template>
<script>
import axios from 'axios'
import { required, email, sameAs, minLength } from "vuelidate/lib/validators";
export default {
    name: 'RegisterForm',
    data() {
        return {
            data: {
                name: null,
                email: null,
                password: null,
                c_password: null
            },
            isValid: false
        }
    },
    validations: {
                data: {
                    name: {
                        required
                    },
                    email: {
                        required,
                        email
                    },
                    password: {
                        required,
                        minLength: minLength(8)
                    },
                    c_password: {
                        required,
                        sameAsPassword: sameAs('password')
                    }
                }
            },

    methods: {
        async createUsers() {
            this.isValid = true;

                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
            await axios.post('http://127.0.0.1:8000/api/register', this.data)
                .then((res) => { this.data = res })
                .catch((error) => {
                    console.log(error)
                });
            this.$router.push('/login')
        }
    }
}
</script>