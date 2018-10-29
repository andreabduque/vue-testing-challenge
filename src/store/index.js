import Vuex from "vuex";

import users from "./modules/users";

let store;

export function setupStore(Vue) {
  Vue.use(Vuex);
  store = new Vuex.Store({
    modules: {
      users: users
    }
  });
  return store;
}

export default store;
