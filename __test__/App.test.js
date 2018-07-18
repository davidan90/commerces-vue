import { shallow, mount } from "vue-test-utils";
import App from "../src/App";

describe("App.test.js", () => {
  const params = {
    mocks: {
      $t: key => key
    }
  };

  describe("Unit", () => {
    it("contains id exampleApp", () => {
      expect(shallow(App).contains("#exampleApp")).toBe(true);
    });
  });

  describe("Snapshots", () => {
    it("default render", () => {
      expect(mount(App, params).html()).toMatchSnapshot();
    });
  });
});
