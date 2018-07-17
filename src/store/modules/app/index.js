const state = {
  aside: {
    show: false
  }
};

const mutations = {
  showAside(state) {
    state.aside.show = true;
  },
  hideAside(state) {
    state.aside.show = false;
  }
};

const getters = {
  getAsideShow(state) {
    return state.aside.show;
  }
};

const actions = {
  showAside({ commit }) {
    commit("showAside");
  },
  hideAside({ commit }) {
    commit("hideAside");
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
