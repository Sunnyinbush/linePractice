const axios = require('axios');

const getRestaurantData = async () => {
  try {
    const response = await axios.get('http://localhost:9000/restaurantData');
    return response.data;
  } catch (error) {
    console.error(error);
    return { error: 'Internal server error' };
  }
}

const getGameState = async () => {
  try {
    const response = await axios.get('http://localhost:9000/gameState');
    return response.data;
  } catch (error) {
    console.error(error);
    return { error: 'Internal server error' };
  }
}

module.exports = {
  getRestaurantData,
  getGameState
};