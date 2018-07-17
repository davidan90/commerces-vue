import { shallow, mount } from "vue-test-utils";
import App from "../src/App";

describe("App.test.js", () => {
  it("contains #exampleApp", () => {
    const wrapper = shallow(App);
    expect(wrapper.contains("#exampleApp")).toBe(true);
  });

  it("renders correctly", () => {
    const wrapper = mount(App);
    expect(wrapper.element).toMatchSnapshot();
  });
});
