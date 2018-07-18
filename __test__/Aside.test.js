import { shallow, mount } from "vue-test-utils";
import Aside from "../src/components/Aside";
import store from "../src/store";

describe("Aside.test.js", () => {
  const params = {
    store,
    mocks: {
      $t: () => {}
    }
  };

  it("find only one aside tag", () => {
    expect(shallow(Aside, params).findAll("aside").length).toBe(1);
  });

  it("renders correctly", () => {
    expect(mount(Aside, params).element).toMatchSnapshot();
  });
});
