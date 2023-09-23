import styled from 'styled-components';



export const FilterContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FilterLabel = styled.label`
display: flex;
flex-direction: column;
align-items: center;
font-weight: bold;
margin-bottom: 5px;
Font-size: 18px;
`;

export const FilterInput = styled.input`
  max-width: 300px;
  padding: 8px;
  margin-top: 20px;
  margin-left: 10px; 
  border: 1px solid #ccc;
  border-radius: 4px;
`;