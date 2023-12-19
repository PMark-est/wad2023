import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import AddPost from "../views/AddPost.vue";
import APost from "../views/APost.vue";
import Contacts from "../views/Contacts.vue";
import auth from "../auth.js";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    // check if user is authenticated to be able to access the home page
    beforeEnter: async (to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
        // if user is not authenticated, redirect to login page
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/signUp",
    name: "signUp",
    component: SignUp,
  },
  {
    path: "/LogIn",
    name: "login",
    component: LogIn,
  },
  {
    path: "/addPost",
    name: "addPost",
    component: AddPost,
  },
  {
    path: "/post",
    name: "aPost",
    component: APost,
  },
  {
    path: "/Contacts",
    name: "contacts",
    component: Contacts,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
