import { shallow, mount } from "vue-test-utils";
import CommercesTable from "../src/views/home/components/CommercesTable";
import store from "../src/store";
import i18n from "../src/i18n";

describe("CommercesTable.test.js", () => {
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
      wrapper = shallow(CommercesTable, params);
    });

    it("remove table if commerces undefined", () => {
      expect(wrapper.contains(".table .table__head")).toBeFalsy();
    });

    it("create table if commerces is defined", () => {
      wrapper.setProps({ commerces: [] });
      expect(wrapper.contains(".table .table__head")).toBeTruthy();
    });

    it("when click in row execute showDetail", () => {
      const stub = jest.fn();
      wrapper.setProps({ commerces: [commerceMock] });
      wrapper.setMethods({ showDetail: stub });
      const row = wrapper
        .find(".table .table__body .tr")
        .trigger("click", commerceMock);
      expect(stub).toHaveBeenCalled();
    });

    it("triggers a show-commerce-detail when showDetail is called", () => {
      const stub = jest.fn();
      wrapper.vm.$on("show-commerce-detail", stub);
      wrapper.vm.showDetail(commerceMock);
      expect(stub).toHaveBeenCalled();
    });
  });

  describe("Snapshots", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(CommercesTable, params);
    });

    it("default render", () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    it("render with list of commerces", () => {
      wrapper.setProps({ commerces: [commerceMock] });
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
