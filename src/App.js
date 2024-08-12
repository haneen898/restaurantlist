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



