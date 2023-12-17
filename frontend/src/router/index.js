import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/SignUp.vue";
import AddPost from "../views/AddPost.vue";
import ViewPost from "../views/AddPost.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: SignUp,
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
