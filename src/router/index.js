import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
 
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/description",
    name: "description",
    component: () =>
      import(/* webpackChunkName: "description" */ "../views/Description.vue")
  },
  {
    path: "/test",
    name: "test",
    component: () => import(/* webpackChunkName: "test" */ "../views/Test.vue")
  },
  {
    path: "/fin",
    name: "fin",
    component: () => import(/* webpackChunkName: "fin" */ "../views/Fin.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;