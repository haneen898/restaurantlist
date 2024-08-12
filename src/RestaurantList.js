import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import RestaurantForm from './RestaurantForm';

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);

    const handleAddRestaurant = (newRestaurant) => {
        setRestaurants([...restaurants, newRestaurant]);
    };

    const handleDeleteRestaurant = (index) => {
        setRestaurants(restaurants.filter((_, i) => i !== index));
    };

    const handleChangeRating = (index) => {
        const newRating = prompt('Enter new rating (1-5):');
        if (newRating >= 1 && newRating <= 5) {
            const updatedRestaurants = [...restaurants];
            updatedRestaurants[index].rating = newRating;
            setRestaurants(updatedRestaurants);
        }
    };

    return (
        <div data-testid="restaurants-list" className="space-y-4">
            <RestaurantForm onAddRestaurant={handleAddRestaurant} />
            {restaurants.map((restaurant, index) => (
                <RestaurantCard 
                    key={index} 
                    restaurant={restaurant}
                    onDelete={() => handleDeleteRestaurant(index)}
                    onChangeRating={() => handleChangeRating(index)}
                />
            ))}
        </div>
    );
};

export default RestaurantList;



