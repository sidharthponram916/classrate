import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import FlashMessage from "@smartweb/vue-flash-message";
import VueClipboard from "vue-clipboard2";
import animatenumber from "animated-number-vue";
//import config from '../config'
import store from "./store";
import http from "./http";
import Ads from "vue-google-adsense";
import GAuth from "vue-oauth2-google";

const gAuthOptions = {
  clientId:
    "199941469614-tcdpve2r36ljnm2o504ptn992udrj75e.apps.googleusercontent.com",
  scope: "profile email",
  successCallback: () => {
    console.log("Success!!");
  },
  errorCallback: (e) => console.log(e),
};

Vue.use(GAuth, gAuthOptions);

Vue.use(require("vue-script2"));
Vue.use(Ads.Adsense);
Vue.use(FlashMessage);
Vue.use(animatenumber);
Vue.use(VueClipboard);

Vue.config.productionTip = false;
Vue.prototype.$http = http;

localStorage.setItem("baseUrl", "https://www.classrate.org");

if (localStorage.getItem("token")) {
  store.commit("logIn");
  http.defaults.headers.common["Authorization"] = localStorage.getItem("token");

  http
    .get("/users/current")
    .then((res) => {
      store.commit("setUserData", res.data);
    })
    .catch((err) => {
      console.log(err.message);

      delete http.defaults.headers.common["Authorization"];

      localStorage.removeItem("token");

      store.commit("logOut");

      location.replace("/login");
    });
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
