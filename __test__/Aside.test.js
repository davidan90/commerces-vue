import { shallow, mount } from "vue-test-utils";
import Aside from "../src/components/Aside";
import store from "../src/store";

describe("Aside.test.js", () => {
  const params = {
    store,
    mocks: {
      $t: key => key
    }
  };

  describe("Unit", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(Aside, params);
    });
    it("find only one aside tag", () => {
      expect(shallow(Aside, params).findAll("aside").length).toBe(1);
    });

    it("if store is true, have class active", () => {
      params.store.state.app.aside.show = true;
      expect(
        shallow(Aside, params).contains("aside.aside--active")
      ).toBeTruthy();
    });
  });

  describe("Snapshots", () => {
    it("default render", () => {
      expect(mount(Aside, params).html()).toMatchSnapshot();
    });
  });
});
