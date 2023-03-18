import styled from 'styled-components';
import { FcSearch } from 'react-icons/fc';

export const Form = styled.form`
  margin: 100px auto 0;
  
  width: 100%;
  max-width: 500px;
  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`;
export const SearchSvg = styled(FcSearch)`
  width: 15px;
  height: 15px;
  fill: black;
`;

export const Input = styled.input`
  width: 250px;
  height: 25px;
  padding: 10px 10px 0 10px;
  font-size: 20px;
  border: none;
  border-bottom: 0.5px solid #00000073;
`;
