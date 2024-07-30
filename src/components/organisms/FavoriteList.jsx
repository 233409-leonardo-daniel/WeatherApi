import React from 'react';
import WeatherCard from '../molecules/WeatherCard';
import styled from 'styled-components';

const FavoritesContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const FavoriteList = ({ favorites, toggleFavorite }) => {
  return (
    <FavoritesContainer>
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
    </FavoritesContainer>
  );
};

export default FavoriteList;
