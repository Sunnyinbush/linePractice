//get all restaurantdata in database.json in jsonServer at local host 9000 and export the module using axios
const axios = require('axios');

const getRestaurantData = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:9000/restaurantData');
    res.status(200).json({ status: 'success', data: response.data });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
}

const getgameState = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:9000/gameState');
    res.status(200).json({ status: 'success', data: response.data });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
}

module.exports = {
  getRestaurantData,
  getgameState
};