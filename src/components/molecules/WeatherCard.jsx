import React from 'react';
import styled from 'styled-components';
import Checkbox from '../atoms/CheckBox';
import Thermometer from '../atoms/Thermometer'; // Importa el componente del termómetro

const Card = styled.div`
  border: 1px solid rgb(67, 139, 248);
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgb(67, 139, 248);
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
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const WeatherCard = ({ city, weather, toggleFavorite, isFavorite }) => {
  // Función para obtener el nombre del día de la semana
  const getDayName = (dateStr) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(date);
  };

  return (
    <Card>
      <h2>{city}</h2>
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
            <Thermometer temperature={day.temperature} /> {/* Muestra el termómetro */}
          </DayWeather>
        ))}
      </DailyWeatherContainer>
    </Card>
  );
};

export default WeatherCard;
