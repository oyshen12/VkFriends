import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    addedUsers: [],
    usersFriends: [],
  },
  getters: {
    allFriends(state) {
      return state.addedUsers.reduce(
        (acc, user) => acc.concat(user.friends),
        []
      );
    },
  },
  mutations: {
    setAddedUsers(state, payload) {
      state.addedUsers = payload;
    },
    setUsersFriends(state, payload) {
      state.usersFriends = payload;
    },
    addAddedUsers(state, payload) {
      state.addedUsers.push(payload);
    },
    deleteAddedUser(state, user) {
      state.addedUsers = state.addedUsers.filter(
        (userArr) => userArr.id !== user.id
      );
    },
  },
  actions: {
    vkAPI(context, payload) {
      const pr = new Promise((res) => {
        VK.Api.call(
          payload.link,
          { v: "5.131", ...payload.option },
          function (r) {
            return res(r);
          }
        );
      });
      return pr;
    },
  },
  modules: {},
});
