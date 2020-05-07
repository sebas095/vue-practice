import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
import Vuelidate from "vuelidate";

import router from "./router";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.directive("width", {
  inserted(el, binding, vnode) {
    console.log(vnode);
    console.log(binding);

    el.style.width = binding.value;
  },
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
