import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  padding: 16px;
  font-weight: 700;
  font-size: 18px;
  color: #3d5444;
  &.active {
    color: #3d5444;
    text-decoration: underline;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
