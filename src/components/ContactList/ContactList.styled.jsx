import styled from 'styled-components';

export const ContactListContainer = styled.div`
  padding: 20px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
`;

export const TableHeader = styled.th`
  padding: 12px 20px; 
  text-align: left;
  background-color: #f2f2f2;
  border-bottom: 1px solid #ccc;
`;

export const TableCell = styled.td`
  padding: 12px 20px; 
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const DeleteButton = styled.button`
  background-color: #ff6347;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const StyledNotificationContent = styled.span`
  span {
    font-family: inherit;
    font-size: 13px;
    font-weight: bold;
    color: #333; 
  }
`;
