import { shallow, mount } from "vue-test-utils";
import Home from "../src/views/home/Home";
import store from "../src/store";

describe("Home.test.js", () => {
  const params = {
    store,
    mocks: {
      $t: () => {}
    }
  };

  it("contains id home", () => {
    expect(shallow(Home, params).contains("#home")).toBe(true);
  });

  it("isLoading is true", () => {
    expect(shallow(Home, params).vm.isLoading).toBe(true);
  });

  it("if isLoading is false, Spinner remove", () => {
    const wrapper = shallow(Home, params);
    wrapper.setProps({ isLoading: false });
    expect(wrapper.contains(".load-spinner")).toBeFalsy();
  });

  it("renders correctly", () => {
    expect(mount(Home, params).element).toMatchSnapshot();
  });
});
