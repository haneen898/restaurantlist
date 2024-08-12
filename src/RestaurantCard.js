import React from 'react';

const RestaurantCard = ({ restaurant, onDelete, onChangeRating }) => {
    const { name, location, rating } = restaurant;

    return (
        <div className="p-4 border rounded-lg shadow-lg">
            <h2 data-testid="restaurant-name" className="text-xl font-bold">{name}</h2>
            <p data-testid="restaurant-location" className="text-gray-600">{location}</p>
            <p data-testid="restaurant-rating" className="text-yellow-500">Rating: {rating} / 5</p>
            <div className="flex justify-between mt-4">
                <button 
                    className="text-white bg-red-500 hover:bg-red-700 px-2 py-1 rounded"
                    onClick={onDelete}
                >
                    Delete
                </button>
                <button 
                    className="text-white bg-blue-500 hover:bg-blue-700 px-2 py-1 rounded"
                    onClick={onChangeRating}
                >
                    Change Rate
                </button>
            </div>
        </div>
    );
};

export default RestaurantCard;







