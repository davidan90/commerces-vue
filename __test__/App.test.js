import { shallow, mount } from "vue-test-utils";
import App from "../src/App";

describe("App.test.js", () => {
  const params = {
    mocks: {
      $t: () => {}
    }
  };

  it("contains id exampleApp", () => {
    expect(shallow(App).contains("#exampleApp")).toBe(true);
  });

  it("renders correctly", () => {
    expect(mount(App, params).element).toMatchSnapshot();
  });
});
