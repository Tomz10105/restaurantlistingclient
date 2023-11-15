import React from 'react';

const RestaurantItem = ({ restaurant }) => {
  return (
    <div>
      <p>{restaurant.restaurant_name}</p>
    </div>
  );
};

export default RestaurantItem;
