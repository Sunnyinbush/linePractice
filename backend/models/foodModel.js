const axios = require("axios")

async function getData() {
    try {
      const res = await axios.get('http://localhost:9000/info');
      return res.data;
    } catch (error) {
      console.log('error');
    }
};

module.exports = {getData};