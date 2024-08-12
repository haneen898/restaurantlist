import React from 'react';
import { useParams } from 'react-router-dom';

const RestaurantDetails = ({ restaurants }) => {
    const { id } = useParams();
    const restaurant = restaurants[id];

    if (!restaurant) {
        return <p>Restaurant not found</p>;
    }

    return (
        <div className="p-4 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold">{restaurant.name}</h2>
            <p className="text-gray-600">{restaurant.location}</p>
            <p className="text-yellow-500">Rating: {restaurant.rating} / 5</p>
        </div>
    );
};

export default RestaurantDetails;





// import React from 'eact';

// const RestaurantDetails = ({ match, restaurants }) => {
//   const restaurantId = match.params.id;
//   const restaurant = restaurants.find((r) => r.id === parseInt(restaurantId));

//   return (
//     <div>
//       <h1>{restaurant.name}</h1>
//       <p>Location: {restaurant.location}</p>
//       <p>Rating: {restaurant.rating}</p>
//       {/* display more details about the restaurant */}
//     </div>
//   );
// };

// export default RestaurantDetails;