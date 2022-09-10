import axios from "axios";
import store from '@/store'

axios.defaults.baseURL= 'http://127.0.0.1:8000/api/';

store.subscribe ((mutation)=>{

    switch(mutation.type){
        case 'auth/SET_TOKEN':
            if (mutation.payload){
                axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`
                localStorage.setItem('token', mutation.payload)
            }else{
                axios.defaults.headers.common['Authorization'] = null
                localStorage.removeItem('token')
            }
            console.log(mutation.payload)
        break;
    }
})
// to ensure re-authentication after refresh 
store.dispatch('auth/attempt', localStorage.getItem('token'))