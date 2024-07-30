import React, { useState } from 'react';
import CitySearch from '../components/molecules/CitySearch';
import WeatherCard from '../components/molecules/WeatherCard';
import FavoriteList from '../components/organisms/FavoriteList';
import CustomButton from '../components/atoms/Button';
import styled from 'styled-components';

const API_KEY = 'D6G9Wae9pnfYTS0qzToG1ABVrlx3SD8Z';
const BASE_URL = 'https://api.tomorrow.io/v4/weather/forecast';

const Header = styled.header`
  background-color: #00008B;
  padding: 20px;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  height: 170px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1800px;
  margin-bottom: 20px;
  gap: 10px; /* Espacio entre el campo de búsqueda y el botón */
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Section = styled.div`
  width: 100%;
  max-width: 1800px;
  margin-bottom: 20px;
`;

const FavoritesContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Home = () => {
  const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const addCity = async () => {
    try {
      const response = await fetch(`${BASE_URL}?location=${city}&apikey=${API_KEY}`);
      const weatherData = await response.json();

      const dailyWeather = weatherData.timelines.daily.map(day => ({
        date: new Date(day.time).toLocaleDateString(),
        time: new Date(day.time).toLocaleTimeString(),
        summary: day.description || "No summary available",
        temperature: day.values.temperatureAvg || "No data",
        precipitation: day.values.precipitationTotal || "No data"
      }));

      setCurrentWeather({ city, weather: dailyWeather });
    } catch (error) {
      console.error(error);
    }
    setCity('');
  };

  const toggleFavorite = (city) => {
    if (favorites.some(fav => fav.city === city)) {
      setFavorites(favorites.filter(fav => fav.city !== city));
    } else {
      setFavorites([...favorites, currentWeather]);
    }
  };

  return (
    <div>
      <Header>App de clima</Header>
      <Container>
        <ControlsContainer>
          <CitySearch city={city} setCity={setCity} addCity={addCity} />
          <CustomButton onClick={() => setShowFavorites(!showFavorites)}>
            {showFavorites ? 'Ocultar Favoritos' : 'Mostrar Favoritos'}
          </CustomButton>
        </ControlsContainer>
        <Section>
          {currentWeather && (
            <CardsContainer>
              <WeatherCard
                city={currentWeather.city}
                weather={currentWeather.weather}
                toggleFavorite={toggleFavorite}
                isFavorite={favorites.some(fav => fav.city === currentWeather.city)}
              />
            </CardsContainer>
          )}
        </Section>
        {showFavorites && (
          <Section>
            <h2>Favorites</h2>
            <FavoritesContainer>
              <FavoriteList favorites={favorites} toggleFavorite={toggleFavorite} />
            </FavoritesContainer>
          </Section>
        )}
      </Container>
    </div>
  );
};

export default Home;
