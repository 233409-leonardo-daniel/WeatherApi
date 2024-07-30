import React from 'react';
import styled from 'styled-components';

const ThermometerContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 150px; 
  width: 30px;
  background-color: #eee;
  border-radius: 15px;
  position: relative;
  margin: 10px 0;
`;

const ThermometerLevel = styled.div`
  height: ${({ temperature }) => Math.min(100, temperature)}%; 
  width: 100%;
  background-color: #d9534f;
  border-radius: 15px 15px 0 0;
  position: absolute;
  bottom: 0;
`;

const ThermometerCap = styled.div`
  width: 100%;
  height: 20px;
  background-color: #d9534f;
  border-radius: 50%;
  position: absolute;
  top: -20px;
  left: 0;
`;

const Thermometer = ({ temperature }) => {
  return (
    <ThermometerContainer>
      <ThermometerLevel temperature={temperature} />
      <ThermometerCap />
    </ThermometerContainer>
  );
};

export default Thermometer;
