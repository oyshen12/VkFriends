import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token:
      "vk1.a._1GmQp9ey-8e2IBUzsGpn3pTtqDBDGcvI5tKW45A4yKvo9aRNnVyQLQW0P7bmwqviyvdCz8nIEyT9rMBzejXp0ye5IFLNaWGo1iMrxA1F-trpJTyTfN-LDvxbB5NKy3HUSrdQSnu8KYRUGVnAeprJyu6csS-BKd2NsrtAr5c5nitcMfVek8ScAhWQbp6kAWM",
    app_id: "51438811",
  },
  getters: {},
  mutations: {},
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
