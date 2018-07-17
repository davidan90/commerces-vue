import Vue from "vue";
import App from "./App.vue";
import router from "./appRoutes";
import store from "./store";

new Vue({
  el: "#exampleTestDavid",
  router,
  store,
  render: h => h(App)
});
