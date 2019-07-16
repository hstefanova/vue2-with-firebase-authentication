import firebase from 'firebase';
import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Login from './views/Login.vue';
import SignUp from './views/SignUp.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      //redirects every paths that does not exist to Login view
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      //access the app only with authentication
      meta: {
        requiresAuth: true 
      }
    }
  ]
});

/**
 *  navigation guard
*/
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser; // User || null
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth); //true or false

  if(requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('home')
  else next(); //proceed navigation
});

export default router;