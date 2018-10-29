import { createLocalVue, mount } from "@vue/test-utils";
import Home from "./Home";
import users from "../store/modules/users";
import Vuex from "vuex";

let store;
let localVue = createLocalVue();
localVue.use(Vuex);

function createWrapper() {
  return mount(Home, { localVue, store });
}

describe("components", () => {
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        users: users
      }
    });
  });

  it("should fetch users", () => {
    const wrapper = createWrapper();

    expect(store.getters.getUsers).toEqual([]);
    wrapper.find(".mdl-button").trigger("click");
    expect(store.getters.getUsers).toEqual(["user1", "user2"]); // How would you assert this?
  });

  it("should not fetch users 2 times", () => {
    const wrapper = createWrapper();

    expect(store.getters.getUsers).toEqual([]);
    wrapper.find(".mdl-button").trigger("click");
    expect(store.getters.getUsers).toEqual(["user1", "user2"]);
    wrapper.find(".mdl-button").trigger("click");
    // Assert a second call
  });
});
