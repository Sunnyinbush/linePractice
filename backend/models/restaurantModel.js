const axios = require('axios');

const getRestaurantData = (req, res) => {
  axios.get('http://localhost:9000/restaurantData')
    .then(response => {
      res.status(200).json({ status: 'success', data: response.data });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Internal server error');
    });
}

const getgameState = (req, res) => {
  axios.get('http://localhost:9000/gameState')
    .then(response => {
      res.status(200).json({ status: 'success', data: response.data });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Internal server error');
    });
}

module.exports = {
  getRestaurantData,
  getgameState
};
