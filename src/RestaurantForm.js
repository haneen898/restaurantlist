import React, { useState } from 'react';

const RestaurantForm = ({ onAddRestaurant }) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [rating, setRating] = useState(3);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddRestaurant({ name, location, rating });
        setName('');
        setLocation('');
        setRating(3);
    };

    return (
        <div 
            className="relative bg-cover bg-center"
            style={{
                backgroundImage: 'url(https://th.bing.com/th/id/OIP.RqEMcCnRSiXmOo0vaS2GFQHaHa?rs=1&pid=ImgDetMain)',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10">
                <h1 className="text-center text-4xl m-6 p-6 text-white">
                    Add your favorite restaurant
                </h1>
                <div className="flex items-center justify-center">
                    <img 
                        src="https://th.bing.com/th/id/OIP.RqEMcCnRSiXmOo0vaS2GFQHaHa?rs=1&pid=ImgDetMain"
                        alt="fried chicken"
                        className="w-52 h-56 mt-6 m-8 rounded-lg shadow-lg"
                    />    
                </div>
                <div className="flex items-center justify-center">
                    <form className="p-8 border rounded-lg shadow-lg bg-white" onSubmit={handleSubmit}>
                        <input 
                            data-testid="restaurant-name-input"
                            type="text"
                            placeholder="Restaurant Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="block w-60 p-2 mb-4 border rounded"
                            required
                        />
                        <input 
                            data-testid="restaurant-location-input"
                            type="text"
                            placeholder="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="block w-60 p-2 mb-4 border rounded"
                            required
                        />
                        <input 
                            data-testid="range-input"
                            type="range"
                            min="1"
                            max="10"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            className="block w-60 p-2 mb-4"
                        />
                        <button 
                            type="submit"
                            className="text-white bg-green-500 hover:bg-green-700 px-4 py-2 rounded"
                        >
                            Add
                        </button>
                    </form>  
                </div>
            </div>
        </div>
    );
};

export default RestaurantForm;







// import React, { useState } from 'react';
// import { TextField, Button, Slider } from '@mui/material';

// const RestaurantForm = ({ addRestaurant }) => {
//   const [name, setName] = useState('');
//   const [location, setLocation] = useState('');
//   const [rating, setRating] = useState(1);

//   const handleAddRestaurant = () => {
//     addRestaurant({ name, location, rating });
//     setName('');
//     setLocation('');
//     setRating(1);
//   };

//   return (
//     <div>
//       <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} data-testid='restaurant-name-input' />
//       <TextField label="Location" value={location} onChange={(e) => setLocation(e.target.value)} data-testid='restaurant-location-input' />
//       <Slider value={rating} onChange={(e, newValue) => setRating(newValue)} min={1} max={5} step={1} data-testid='range-input' />
//       <Button variant="contained" onClick={handleAddRestaurant}>Add</Button>
//     </div>
//   );
// };

// export default RestaurantForm;
