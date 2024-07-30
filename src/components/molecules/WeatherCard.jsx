import React from 'react';
import styled from 'styled-components';
import Checkbox from '../atoms/CheckBox';
import Thermometer from '../atoms/Thermometer';

const Card = styled.div`
  border: 1px solid #4a90e2; 
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  background-color: #ffffff; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DailyWeatherContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const DayWeather = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  background-color: #f5f5f5; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  color: #2d2d2d; 
`;

const WeatherCard = ({ city, weather, toggleFavorite, isFavorite }) => {
  const getDayName = (dateStr) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(date);
  };

  return (
    <Card>
      <h2 style={{ color: '#003366' }}>{city}</h2> 
      <Checkbox 
        label="Favorite" 
        checked={isFavorite} 
        onChange={() => toggleFavorite(city)} 
      />
      <h3>Resumen de la semana</h3>
      <DailyWeatherContainer>
        {weather.map((day, index) => (
          <DayWeather key={index}>
            <div>
              <p><strong>Fecha:</strong> {getDayName(day.date)}, {day.date}</p>
              <p><strong>Hora:</strong> {day.time}</p>
              <p><strong>Temperatura:</strong> {day.temperature} °C</p>
            </div>
            <Thermometer temperature={day.temperature} />
          </DayWeather>
        ))}
      </DailyWeatherContainer>
    </Card>
  );
};

export default WeatherCard;
