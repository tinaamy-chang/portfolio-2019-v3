import React from 'react';
import styled from 'styled-components';

const TopNav = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  border-bottom: 1px solid Gainsboro;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  background: #be93c5;
  background: linear-gradient(to right, #c4797e, #dbbfb3);

  @media only screen and (max-width: 726px) {
    padding: 1.5em;
    display: flex;
  }
`;

export default TopNav;
