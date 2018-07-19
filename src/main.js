import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import i18n from "./i18n";
import api from "./api";

new Vue({
  el: "#exampleTestDavid",
  router,
  store,
  i18n,
  api: api(),
  render: h => h(App)
});
