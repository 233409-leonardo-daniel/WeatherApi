import React from 'react';
import CustomInput from '../atoms/Imput';
import CustomButton from '../atoms/Button';

const CitySearch = ({ city, setCity, addCity }) => {
  return (
    <div>
      <CustomInput 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
      />
      <CustomButton onClick={addCity}>Buscar City</CustomButton>
    </div>
  );
};

export default CitySearch;
