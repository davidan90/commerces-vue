import { commerces } from "api/commerces";
import { PROCESSING_ALL_COMMERCES, GET_ALL_COMMERCES } from "./mutation-types";

export default {
  async getAllCommerces({ commit }) {
    commit(PROCESSING_ALL_COMMERCES);
    const allCommerces = await commerces.getAll();
    if (allCommerces) {
      commit(GET_ALL_COMMERCES, {
        commerces: allCommerces
      });
    }
  }
};
