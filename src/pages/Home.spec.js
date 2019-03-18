import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import Home from "./Home";
import users from "../store/modules/users";
import Vuex from "vuex";
import axios from "axios";

let store;
let localVue = createLocalVue();
localVue.use(Vuex);

jest.mock('axios', () => {
  return {
    get: () => Promise.resolve({ data: ["user1", "user2"] })
  }
})

function createWrapper() {
  return shallowMount(Home, { localVue, store });
}

function createStore(){
  return new Vuex.Store({
    modules: {
      users: users
    }
  })
}

describe("components", () => {
  beforeEach(() => {
    store = createStore()
  });

  it("should fetch users", () => {
    const wrapper = createWrapper();
    expect(store.getters.getUsers).toEqual([]);
    wrapper.find(".mdl-button").trigger("click");
    //expect(store.getters.getUsers).toEqual(["user1", "user2"]); // How would you assert this?

    wrapper.vm.$nextTick(() => {
      expect(store.getters.getUsers).toEqual(["user1", "user2"])
    })
  });

  // it("should not fetch users 2 times", () => {
  //   const wrapper = createWrapper();

  //  // expect(store.getters.getUsers).toEqual([]);
  //   // wrapper.find(".mdl-button").trigger("click");
  //   // //expect(store.getters.getUsers).toEqual(["user1", "user2"]);
  //   // wrapper.find(".mdl-button").trigger("click");
  //   // // Assert a second call
  //   // wrapper.vm.$nextTick(() => {
  //   //   expect(axios).toHaveBeenCalledTimes(1);
  //   //  // done()
  //   // })
  // });
});
