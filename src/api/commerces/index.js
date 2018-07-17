export const commerces = {
  endpoints(params) {
    const mainUrl = "https://s3-eu-west-1.amazonaws.com/developers-tests";
    return {
      all: `${mainUrl}/commerces.json`
    };
  },

  getAll() {
    const options = {
      method: "GET"
    };
    return fetch(this.endpoints().all, options)
      .then(response => response.json())
      .catch(this.logError.bind(this, error));
  },

  logError(error) {
    console.error("Problema en commerces: ", error.message);
  }
};
