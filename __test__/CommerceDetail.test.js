import { mount } from "vue-test-utils";
import CommerceDetail from "../src/views/home/components/CommerceDetail";
import store from "../src/store";
import i18n from "../src/i18n";

describe("CommerceDetail.test.js", () => {
  const params = {
    store,
    i18n,
    mocks: {
      $t: key => key
    }
  };
  const commerceMock = {
    id: 1,
    name: "Telefonica",
    nif: "50732",
    year: 1950
  };

  describe("Unit", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(CommerceDetail, params);
    });

    it("undefined if no commerce", () => {
      expect(wrapper.html()).toBeUndefined();
    });

    it("render in one aside", () => {
      wrapper.setProps({ commerce: commerceMock });
      expect(wrapper.findAll("aside").length).toBe(1);
    });

    it("when button click execute close", () => {
      const stub = jest.fn();
      wrapper.setProps({ commerce: commerceMock });
      wrapper.setMethods({ close: stub });
      const footerBtn = wrapper.find("footer button").trigger("click");

      expect(stub).toHaveBeenCalled();
    });

    it("when close set store app>aside>show to false", () => {
      wrapper.setProps({ commerce: commerceMock });
      wrapper.vm.close();
      expect(wrapper.vm.$store.state.app.aside.show).toBeFalsy();
    });
  });

  describe("Snapshots", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(CommerceDetail, params);
    });

    it("default render", () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    it("render with commerce", () => {
      wrapper.setProps({ commerce: commerceMock });
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
