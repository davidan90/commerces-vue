import { shallow, mount } from "vue-test-utils";
import Home from "../src/views/home/Home";
import store from "../src/store";

describe("Home.test.js", () => {
  const params = {
    store,
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
      wrapper = shallow(Home, params);
    });

    it("contains id home", () => {
      expect(wrapper.contains("#home")).toBe(true);
    });

    it("isLoading is true", () => {
      expect(wrapper.vm.isLoading).toBe(true);
    });

    it("if isLoading is false, Spinner remove", () => {
      wrapper.setProps({ isLoading: false });
      expect(wrapper.contains(".load-spinner")).toBeFalsy();
    });

    it("showCommerceDetail set commerceSelected", () => {
      wrapper.vm.showCommerceDetail(commerceMock);
      expect(wrapper.vm.commerceSelected).toBe(commerceMock);
    });

    it("when showCommerceDetail set store app>aside>show to true", () => {
      wrapper.vm.showCommerceDetail(commerceMock);
      expect(wrapper.vm.$store.state.app.aside.show).toBeTruthy();
    });
  });

  describe("Snapshots", () => {
    it("default render", () => {
      expect(mount(Home, params).html()).toMatchSnapshot();
    });
  });
});
