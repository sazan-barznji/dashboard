import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    user :(state)=>{
      return state.user;
    }
  },
  mutations: {
    user(state,user){
      state.user= user;
    }
  },
  actions: {
    user({commit},user){
      commit('user', user);
    }
  },
  modules: {
  }
})
