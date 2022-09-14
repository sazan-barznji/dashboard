import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterForm from '../components/RegisterForm.vue'
import LoginForm from '../components/LoginForm.vue'
import DashBoard from '../components/DashBoard.vue'
// import store from '@/store'
import UserProfile from '../components/UserProfile.vue'
import auth from '@/store/auth'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    meta:{
      requireAuth:true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/register',
    name: 'RegisterForm',
    component: RegisterForm
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm
  },
  {
    path: '/DashBoard',
    name: 'DashBoard',
    component: DashBoard,
    meta:{
      requireAuth:true
    },
    // beforeEnter: (to, from, next)=>{
    //   if(!store.getters['auth/authenticated']){
    //     return next ({
    //     name: LoginForm
    //     })
    //   }
      
    //   next()
    // }
  },
  {
    path: '/profile/:userId',
    name: 'UserProfile',
    component: UserProfile
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  const requiresAuth= to.matched.some(x=> x.meta.requiresAuth)
  if(requiresAuth && !auth.authenticated){
    next('/login')
  }else{
    next()
  }
})

export default router
