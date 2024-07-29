import React from 'react';
import styled from 'styled-components';




const Card = styled.div`
  border: 1px solid rgb(67, 139, 248);
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgb(67, 139, 248);
`;

const WeatherCard = ({ city, weather,toggleFavorite,isFavorite }) => {
  return (
    <Card>
      <h2>{city}</h2>
      <Checkbox 
        label="Favorite" 
        checked={isFavorite} 
        onChange={() => toggleFavorite(city)} 
      />
      {weather.map((day, index) => (
        <div key={index}>
          <p><strong>Fecha:</strong> {day.date}</p>
          <p><strong>Hora:</strong> {day.time}</p>
          <p><strong>Resumen:</strong> {day.summary}</p>
          <p><strong>Temperatura:</strong> {day.temperature} °C</p>
          <p><strong>Precipitación:</strong> {day.precipitation} mm</p>
          <hr />
        </div>
      ))}
    </Card>
  );
};

export default WeatherCard;
