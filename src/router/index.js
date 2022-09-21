import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterForm from '../components/RegisterForm.vue'
import LoginForm from '../components/LoginForm.vue'
import DashBoard from '../components/DashBoard.vue'
import store from '@/store'
import UserProfile from '../components/UserProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'LoginForm'
    }
  },
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
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
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard,
    // beforeEnter: (to, from, next)=>{
    //   if(!store.getters['auth/authenticated']){
    //     return next ({
    //     name: 'LoginForm'
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

console.log(store)

router.beforeEach((to, from, next) => {
  console.log(!store.getters.authenticated)
  if (to.path == '/dashboard' && !store.getters.authenticated) {
    
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router
