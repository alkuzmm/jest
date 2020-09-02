const axios = require("axios");

class Ajax {
  static echo(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject(new Error("error"));
        }
      }, 150);
    });
  }

  static async get() {
    URL = "https://jsonplaceholder.typicode.com/todos"
    try {
      const response = await axios.get(URL)
      return response.data
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Ajax;
