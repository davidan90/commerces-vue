import { shallow, mount } from "vue-test-utils";
import Navbar from "../src/components/NavBar";
import i18n from "../src/i18n";

describe("Navbar.test.js", () => {
  it("find only one nav tag", () => {
    const wrapper = shallow(Navbar, {
      i18n
    });
    expect(wrapper.findAll("nav").length).toBe(1);
  });
});
