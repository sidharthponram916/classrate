import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Intro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Home
  },
  { 
    path: '/login', 
    name: "Log In", 
    component: () => import("../views/auth/LogIn.vue")
  }, 
  { 
    path: '/signup',
    name: "Sign Up", 
    component: () => import("../views/auth/SignUp.vue") 
  }, 
  { 
    path: "/home", 
    name: "Home", 
    component: () => import("../views/Home.vue"),
    meta: { 
      authProtected: true
    }
  }, 
  { 
    path: "/write", 
    name: "Write", 
    component: () => import("../views/Write.vue"),
    meta: { 
      authProtected: true
    }
  }, 
  { 
    path:"/reviews/:id", 
    name: "ReviewView", 
    component: () => import('../views/ReviewView.vue')
  }, 
  { 
    path: "/schools/:school", 
    name: "SchoolView", 
    //component: () => import('../views/SchoolView.vue')
  },
  { 
    path: "/schools/:school/:name", 
    name: "ClassView", 
    component: () => import('../views/ClassView.vue')
  }    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Log In' && localStorage.getItem('token') != null) next({ name: 'Home' })
  else next()
})

router.beforeEach((to, from, next) => { 
  if (to.meta.authProtected && !localStorage.getItem('token')) next({ name: "Log In"})
  else next()
})

export default router
