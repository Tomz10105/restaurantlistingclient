import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedStateDropdown, setSelectedStateDropdown] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [selectedStateRestaurants, setSelectedStateRestaurants] = useState([]);
  const [restaurantCountByState, setRestaurantCountByState] = useState({});

  useEffect(() => {
    axios
      .get('https://vercel.com/tomz10105/restaurantlistingapi/api/restaurants')
      .then(response => {
        setRestaurants(response.data);
        countRestaurantsByState(response.data);
      })
      .catch(error => {
        console.error('Error fetching restaurants:', error);
      });
  }, []);

  const countRestaurantsByState = restaurantData => {
    const restaurantCounts = restaurantData.reduce((acc, restaurant) => {
      if (!acc[restaurant.state]) {
        acc[restaurant.state] = 0;
      }
      acc[restaurant.state]++;
      return acc;
    }, {});
    setRestaurantCountByState(restaurantCounts);
  };

  const categorizeRestaurantsByState = () => {
    const grouped = {};
    restaurants.forEach(restaurant => {
      if (!grouped[restaurant.state]) {
        grouped[restaurant.state] = [];
      }
      grouped[restaurant.state].push(restaurant);
    });
    return grouped;
  };

  const handleStateChange = e => {
    setSelectedStateDropdown(e.target.value);
  };

  const handleSearch = () => {
    if (selectedStateDropdown) {
      setSelectedState(selectedStateDropdown);
      setShowResult(true);
      const groupedRestaurants = categorizeRestaurantsByState();
      const restaurantsInSelectedState = groupedRestaurants[selectedStateDropdown] || [];
      const sortedRestaurants = restaurantsInSelectedState.sort((a, b) => {
        const aNumber = parseInt(a.restaurant_name.match(/\d+/)[0]);
        const bNumber = parseInt(b.restaurant_name.match(/\d+/)[0]);
        return aNumber - bNumber;
      });
      setSelectedStateRestaurants(sortedRestaurants.map(restaurant => restaurant.restaurant_name) || []);
    } else {
      setShowResult(false);
      setSelectedStateRestaurants([]);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-lg">
        <div className="mb-6">
          <label className="block mb-2" htmlFor="stateDropdown">
            Select a state:
          </label>
          <select
            id="stateDropdown"
            className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
            value={selectedStateDropdown}
            onChange={handleStateChange}
          >
            <option value="">Select a state</option>
            {Object.keys(restaurantCountByState).map((state, index) => (
              <option key={index} value={state}>
                {state} ({restaurantCountByState[state] || 0})
              </option>
            ))}
          </select>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {showResult && selectedState && (
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Showing Restaurants in {selectedState}:
            </h2>
            <table className="w-full">
              <tbody>
                {selectedStateRestaurants.map((restaurant, idx) => (
                  <tr key={idx}>
                    <td className="border px-4 py-2">{restaurant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantList;
