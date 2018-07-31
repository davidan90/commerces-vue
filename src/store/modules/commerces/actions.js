import { commerces } from "api/commerces";
import { GET_ALL_COMMERCES } from "./mutation-types";

export default {
  async getAllCommerces({ commit }) {
    const allCommerces = await commerces.getAll();
    if (allCommerces) {
      commit(GET_ALL_COMMERCES, {
        commerces: allCommerces
      });
    }
  }
};
