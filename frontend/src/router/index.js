import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue"
import AddPost from "../views/AddPost.vue";
import ViewPost from "../views/AddPost.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    // check if user is authenticated to be able to access the home page
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if(!authResult) {
        // if user is not authenticated, redirect to login page
        next('/login')
      } else {
        next()
      }
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
    name: "viewPost",
    component: ViewPost,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
