import Vue from "vue";
import Router from "vue-router";

import { Home, Contact, NotFound } from "./views";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/contact",
      component: Contact
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});
