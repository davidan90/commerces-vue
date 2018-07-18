import { shallow, mount } from "vue-test-utils";
import Aside from "../src/components/Aside";
import store from "../src/store";

describe("Aside.test.js", () => {
  it("find only one aside tag", () => {
    const wrapper = shallow(Aside, {
      store
    });
    expect(wrapper.findAll("aside").length).toBe(1);
  });

  it("renders correctly", () => {
    const wrapper = mount(Aside, {
      store,
      mocks: {
        $t: () => {}
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
