export const commerces = {
  endpoints(params) {
    const mainUrl = "https://s3-eu-west-1.amazonaws.com/developers-tests";
    return {
      all: `${mainUrl}/commerces.json`
    };
  },

  getAll() {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };
    return fetch(this.endpoints().all, options)
      .then(response => response.json())
      .catch(error => this.logError(error));
  },

  logError(error) {
    console.error("Problema en commerces: ", error.message);
  }
};
