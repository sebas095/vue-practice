import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const ob1 = {
  namespaced: true,
  state: {
    count: 0,
  },

  mutations: {
    increment(state, value) {
      state.count += value;
    },
  },

  getters: {
    getCount: (state) => (id) => {
      return state.count * id;
    },
  },

  actions: {
    increment(ctx, value) {
      setTimeout(() => {
        ctx.commit("increment", value);
      }, 2000);
    },
  },
};

const ob2 = {
  namespaced: true,
  state: {
    message: "",
  },

  getters: {
    getMessage(state) {
      return state.message;
    },
  },

  mutations: {
    setMessage(state, value) {
      state.message = value;
    },
  },
};

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    a: ob1,
    b: ob2,
  },
});

export default store;
