import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantList from './RestaurantList';
import RestaurantDetails from './RestaurantDetails';
import { useState } from 'react';

const App = () => {
    const [restaurants, setRestaurants] = useState([]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<RestaurantList />} />
                <Route path="/restaurant/:id" element={<RestaurantDetails restaurants={restaurants} />} />
            </Routes>
        </Router>
    );
};

export default App;




// import React from 'react';
// import RestaurantList from './RestaurantList';
// import RestaurantForm from './RestaurantForm';

// const App = () => {
//   // Mock data for demonstration
//   const restaurants = [
//     { id: 1, name: 'Restaurant A', location: 'Location A', rating: 4 },
//     { id: 2, name: 'Restaurant B', location: 'Location B', rating: 3 },
//     { id: 3, name: 'Restaurant C', location: 'Location C', rating: 5 },
//   ];

//   const handleAddRestaurant = (newRestaurant) => {
//     // Implement logic to add new restaurant
//     console.log('Adding new restaurant:', newRestaurant);
//   };

//   return (
//     <div>
//       <h1>Welcome to My Restaurant App</h1>
//       <RestaurantForm onSubmit={handleAddRestaurant} />
//       <RestaurantList restaurants={restaurants} />
//     </div>
//   );
// };

// export default App;