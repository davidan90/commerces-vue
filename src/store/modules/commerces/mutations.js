import { PROCESSING_ALL_COMMERCES, GET_ALL_COMMERCES } from "./mutation-types";

export default {
  [PROCESSING_ALL_COMMERCES](state) {
    state.all.processing = true;
  },
  [GET_ALL_COMMERCES](state, payload) {
    state.all.processing = false;
    state.all.data = payload.commerces;
  }
};
