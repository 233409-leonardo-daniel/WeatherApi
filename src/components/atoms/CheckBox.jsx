import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  margin-left: 8px;
`;

const CheckboxInput = styled.input`
  width: 16px;
  height: 16px;
`;

const Checkbox = ({ label, checked, onChange }) => (
  <CheckboxContainer>
    <CheckboxInput type="checkbox" checked={checked} onChange={onChange} />
    <CheckboxLabel>{label}</CheckboxLabel>
  </CheckboxContainer>
);

export default Checkbox