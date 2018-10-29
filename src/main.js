// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import { setupStore } from "./store";

import Home from "./pages/Home.vue";

Vue.config.productionTip = false;
/* eslint-disable no-new */

new Vue({
  el: "#app",
  render: h => h(Home),
  store: setupStore(Vue)
});
