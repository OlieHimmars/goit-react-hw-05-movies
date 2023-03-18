import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 2px solid;
  background: darkgreen;
  box-shadow: 0 3px 5px 0 rgb(0 4 56 / 50%);
  z-index: 15;
`;

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const NavigationItem = styled.li`
  margin-right: 25px;
`;
export const NavigationLink = styled(NavLink)`
  font-size: 20px;
  transition: opacity 250ms;
  color: white;
  text-decoration: none;
  &.active {
    color: red;
  }
  :hover {
    opacity: 0.8;
  }
`;
