import { checkStatus, logError } from "../utils";

const mockCommerces = [
  {
    id: 1,
    name: "Telefonica",
    nif: "50732",
    year: 1950
  },
  {
    id: 2,
    name: "Bankia",
    nif: "63431",
    year: 2008
  },
  {
    id: 3,
    name: "Pescanova",
    nif: "15571",
    year: 1995
  }
];

export const commerces = {
  endpoints(params) {
    const mainUrl = "https://s3-eu-west-1.amazonaws.com/developers-tests";
    return {
      all: `${mainUrl}/commerces.json`
    };
  },

  async getAll() {
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // };
    // return fetch(this.endpoints().all, options)
    //   .then(checkStatus)
    //   .then(response => response.json())
    //   .then(data => data)
    //   .catch(logError("Commerces getAll"));
    const data = await new Promise(resolve => {
      setTimeout(() => {
        resolve(mockCommerces);
      }, 3000);
    });
    return data;
  }
};
