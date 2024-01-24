import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext.js';
import CanyoneeringAPI from '../api/CanyoneeringAPI';

function FavoriteCanyons() {
    const { user, token } = useContext(UserContext); // Ensure you get the token
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        if (user && user.id && token) {
            CanyoneeringAPI.fetchUserFavorites(user.id, token)
                .then(response => setFavorites(response || [])) // Set to empty array if null
                .catch(console.error);
        }
    }, [user, token]);

    if (!user) {
        // User is not logged in or user data is not available
        return <div>Please log in to view your favorite canyons.</div>;
    }

    return (
        <div>
            <h2>Your Favorite Canyons</h2>
            {favorites && favorites.length > 0 ? (
                favorites.map(canyon => (
                    <div key={canyon.id}>{canyon.name}</div>
                ))
            ) : (
                <div>No favorite canyons found.</div>
            )}
        </div>
    );
}

export default FavoriteCanyons;

