import VueRouter from "vue-router";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Error404 from "./pages/404.vue";
import Details from "./pages/Details.vue";

const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/details/:pId",
    name: "details",
    component: Details,
  },
  {
    path: "*",
    component: Error404,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
