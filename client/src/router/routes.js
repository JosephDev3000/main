import Register from "../views/Register";
import Leave from "../views/Leave";
import Attendance from "../views/Attendance";
import Login from "../views/Login";
import Interns from "../views/Interns";
import Dashboard from "../views/Dashboard";
import ForgotPassword from "../views/ForgotPassword";
import ForgotPasswordEmailSent from "../views/ForgotPasswordEmailSent";
import ResetPassword from "../views/ResetPassword";
import VerifyLogin from "../views/VerifyLogin.vue";
import {useRoute} from "vue-router";

// import { verify } from "crypto";

const routes = [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/verifylogin",
      name: "verifylogin",
      component: VerifyLogin,
      props: () => ({ method: useRoute().query.method, token: useRoute().query.token })
    },
    {
      path: "/register",
      name: "register",
      component: Register //points to register component in components/register
    },
    {
      path: "/forgot-password",
      name: "forgotpassword",
      component: ForgotPassword //points to register component in components/register
    },
    {
      path: "/reset-password",
      name: "resetpassword",
      component: ResetPassword //points to register component in components/register
    },
    {
      path: "/forgot-password-email-sent",
      name: "forgotpasswordemailsent",
      component: ForgotPasswordEmailSent //points to register component in components/register
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard, //points to dashboard 
      meta: {
      requiresAuth: true //meaning it requires user logged in before accessing
      }
    },
    {
      path: "/leave",
      name: "leave",
      component: Leave, //points to leave page
      meta: {
      requiresAuth: true //meaning it requires user logged in before accessing
      }
    },
    {
      path: "/attendance",
      name: "attendance",
      component: Attendance, //points to attendance page
      meta: {
      requiresAuth: true //meaning it requires user logged in before accessing
      }
    },
    {
      path: "/interns",
      name: "interns",
      component: Interns, //points to interns page
      meta: {
      requiresAuth: true //meaning it requires user logged in before accessing
      }
    }
    
];

export default routes;