import { shallow } from "vue-test-utils";
import Navbar from "../src/components/NavBar";
import i18n from "../src/i18n";

describe("Navbar.test.js", () => {
  const params = {
    mocks: {
      $t: key => key
    }
  };

  describe("Unit", () => {
    it("find only one nav tag", () => {
      expect(shallow(Navbar, params).findAll("nav").length).toBe(1);
    });
  });
});
