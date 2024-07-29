import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 10px;
  border: 1px solid #2d67ee;
  border-radius: 4px;
`;

const CustomInput = ({ type, value, onChange }) => (
  <Input type={type} value={value} onChange={onChange} />
);

export default CustomInput;
