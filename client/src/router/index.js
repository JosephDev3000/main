import {createRouter, createWebHashHistory } from "vue-router";

import store from "../store";
import routes from "../router/routes" //import the routes


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


// Global guard for authentication
router.beforeEach((to, from, next) => {
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.state.isUserLoggedIn) {
      next({ name: 'login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

router.beforeEach((to, from, next) => {
  if (to.name == 'login' && store.state.isUserLoggedIn) next({ name: 'login' })
  next()
})


export default router;
