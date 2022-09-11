import axios from "axios"

export default {

    namespaced: true,

    state: {
        token: null,
        user: null
    },
// reading info from state 
    getters: {
        authenticated(state){
            return state.token && state.user;
        },
        user(state){
            return state.user
        }
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_USER(state, user) {
            state.user = user
        }

    },
//first create action
    actions: {
        async signin({ dispatch }, credentials) {
            let response = await axios.post('login', credentials)
            console.log(response.data);

            dispatch('attempt', response.data.data.token);
        },
        async attempt({ commit }, token) {
            //no sending request unless we have a token
            if (token){
                commit('SET_TOKEN', token)
            }
            //no request will be send to api
            // if (!state.token){
            //     return
            // }
            try {
                let response = await axios.get('user')
                commit('SET_USER', response.data.data)
            } catch (e) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        }, 
        logout({commit}){
            //return a promise 
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
                // localStorage.removeItem('token')
           
        }
    }
}
