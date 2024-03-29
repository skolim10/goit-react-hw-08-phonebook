import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
  margin: 100px auto;
  padding: 24px 20px;
  background-color: rgba(61, 84, 68, 0.3);
  box-shadow: 5px 7px 9px rgba(61, 84, 68, 0.8);
  border-radius: 16px;
  border: 2px solid #3d5444;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  font-size: 20px;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 8px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid #3d5444;
  &:focus {
    outline: none;
    border-color: #80a3f9;
    box-shadow: 0 0 10px #80a3f9;
    background-color: #fff;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  background-color: rgba(58, 255, 233, 0.5);
  border: 2px solid #3d5444;
  box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.1);
  &:hover {
    color: rgba(61, 84, 68, 0.9);
    background-color: rgba(172, 204, 131, 0.2);
  }
`;
