import { shallow, mount } from "vue-test-utils";
import CommercesTable from "../src/views/home/components/CommercesTable";
import store from "../src/store";
import i18n from "../src/i18n";

describe("CommercesTable.test.js", () => {
  const params = {
    store,
    i18n,
    mocks: {
      $t: key => key
    }
  };

  describe("Unit", () => {
    it("remove table if commerces undefined", () => {
      expect(
        shallow(CommercesTable, params).contains(".table .table-head")
      ).toBeFalsy();
    });

    it("create table if commerces is defined", () => {
      const wrapper = shallow(CommercesTable, params);
      wrapper.setProps({ commerces: [] });
      expect(wrapper.contains(".table .table-head")).toBeTruthy();
    });
  });
});
