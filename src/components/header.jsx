import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const HEADER_HEIGHT = 20;

const NavLink = styled(Link)`
  color: white;
`;

const Container = styled('div')`
  width: 100vw;
  max-width: 100%;
  background: black;
  height: ${HEADER_HEIGHT}px;
`;

const Header = () => {
  return (
    <Container>
      <NavLink to="/">Home</NavLink>
    </Container>
  );
};

export default Header;
