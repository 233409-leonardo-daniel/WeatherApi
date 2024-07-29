import React from 'react';
import WeatherCard from '../molecules/WeatherCard.jsx';

const FavoriteList = ({ favorites, toggleFavorite }) => {
  return (
    <div>
      {favorites.length > 0 ? (
        favorites.map((data, index) => (
          <WeatherCard 
            key={index}
            city={data.city} 
            weather={data.weather} 
            toggleFavorite={toggleFavorite}
            isFavorite={true}
          />
        ))
      ) : (
        <p>No favorite cities selected.</p>
      )}
    </div>
  );
};

export default FavoriteList;