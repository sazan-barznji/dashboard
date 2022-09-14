<template>
    <div class="register container">
        <div class="row">
            <div class="col">

            </div>
            <div class="col">
                <form @submit.prevent="createUsers" method="post">
                    <h1>Register</h1>
                    <div>
                        <h5>Register for New Account</h5>
                        <p>thank you for connecting with us, sign up to manage your account</p>
                    </div>
                    <p></p>
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" required v-model="user.name"
                            :class="{ 'is-invalid': isValid && $v.user.name.$error }">
                        <div v-if="isValid && !$v.user.name.required" class="invalid-feedback">Name is required</div>
                    </div>
                    <div class="mb-3">
                        <label for="Email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="Email" v-model="user.email" required
                            :class="{ 'is-invalid': isValid && $v.user.email.$error }">
                        <div v-if="isValid && $v.user.email.$error" class="invalid-feedback">
                            <span v-if="!$v.user.email.required">Email is required</span>
                            <span v-if="!$v.user.email.email">Email is not valid</span>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" required v-model="user.password"
                            :class="{ 'is-invalid': isValid && $v.user.password.$error }">
                        <div v-if="isValid && $v.user.password.$error" class="invalid-feedback">
                            <span v-if="!$v.user.password.required">Password field is required</span>
                            <span v-if="!$v.user.password.minLength">Maxium 8 characters allowed</span>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="c_password" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="c_password" required v-model="user.c_password"
                            :class="{ 'is-invalid': isValid && $v.user.c_password.$error }" />
                        <div v-if="isValid && $v.user.c_password.$error" class="invalid-feedback">
                            <span v-if="!$v.user.c_password.required">Confirm Password field is required</span>
                            <span v-else-if="!$v.user.c_password.sameAsPassword">Passwords should be matched</span>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Register</button>
                </form>
            </div>
        </div>



    </div>
</template>
<script>
import axios from 'axios'
import { required, email, sameAs, minLength } from "vuelidate/lib/validators";
export default {
    name: 'RegisterForm',
    data() {
        return {
            user: {
                name: null,
                email: null,
                password: null,
                c_password: null
            },
            isValid: false
        }
    },
    validations: {
        user: {
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
            await axios.post('register', this.user)
                .then((res) => { console.log(res) })
                .catch((error) => {
                    console.log(error)
                });
            this.$router.push('/login')
        }
    }
}
</script>