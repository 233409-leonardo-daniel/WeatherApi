import React, { useState } from 'react';
import CitySearch from '../components/molecules/CitySearch';
import WeatherCard from '../components/molecules/WeatherCard';
import FavoriteList from '../components/organisms/FavoriteList';
import styled from "styled-components";

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
  justify-content: space-between;
  margin-top: 20px;
`;

const LeftSection = styled.div`
  flex: 1;
  margin-right: 20px;
`;
const RightSection = styled.div`
  flex: 1;
`;


const Home = () => {
  const [city, setCity] = useState('');
  const [currentWeather,setCurrentWeather] = useState(null);
  const [favorites, setFavorites] = useState([]);

  
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
        <LeftSection>
          <CitySearch city={city} setCity={setCity} addCity={addCity} />
          {currentWeather && (
            <WeatherCard  
              city={currentWeather.city} 
              weather={currentWeather.weather} 
              toggleFavorite={toggleFavorite} 
              isFavorite={favorites.some(fav => fav.city === currentWeather.city)}
            />
          )}
        </LeftSection>
        <RightSection>
          <h2>Favorites</h2>
          <FavoriteList favorites={favorites} toggleFavorite={toggleFavorite} />
        </RightSection>
      </Container>
    </div>
  );
};


export default Home;
