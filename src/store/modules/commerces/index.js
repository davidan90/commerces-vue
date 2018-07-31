// import { commerces } from "api/";

const state = {
  all: undefined
};

const mutations = {
  setAllCommerces(state, payload) {
    state.all = payload.commerces;
  }
};

const getters = {
  getAllCommerces(state) {
    return state.all;
  }
};

const actions = {
  // async getAllCommerces({ commit }) {
  //   commit("processingCommerces");
  //   const commerces = await this.$api.commerces.getAll();
  //   if (commerces) {
  //     commit("setAllCommerces", {
  //       commerces
  //     });
  //   }
  // },
  setAllCommerces({ commit }, commerces) {
    commit("setAllCommerces", {
      commerces
    });
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
