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
