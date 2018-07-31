import { GET_ALL_COMMERCES } from "./mutation-types";

export default {
  [GET_ALL_COMMERCES](state, payload) {
    state.all = payload.commerces;
  }
};
