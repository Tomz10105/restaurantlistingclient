import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedStateDropdown, setSelectedStateDropdown] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [selectedStateRestaurants, setSelectedStateRestaurants] = useState([]);

  useEffect(() => {
    axios.get('https://restaurantlistingapi.vercel.app/api/restaurants')
      .then(response => {
        setRestaurants(response.data);
      })
      .catch(error => {
        console.error('Error fetching restaurants:', error);
      });
  }, []);

  const groupedRestaurants = restaurants.reduce((acc, restaurant) => {
    if (!acc[restaurant.state]) {
      acc[restaurant.state] = [];
    }
    acc[restaurant.state].push(restaurant.restaurant_name);
    return acc;
  }, {});

  const handleStateChange = (e) => {
    setSelectedStateDropdown(e.target.value);
  };

  const handleSearch = () => {
    if (selectedStateDropdown) {
      setSelectedState(selectedStateDropdown);
      setShowResult(true);
      setSelectedStateRestaurants(groupedRestaurants[selectedStateDropdown] || []);
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
            {Object.keys(groupedRestaurants).map((state, index) => (
              <option key={index} value={state}>{state}</option>
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
