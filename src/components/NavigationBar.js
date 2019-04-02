import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { Link, withPrefix } from 'gatsby';

const NavBar = styled('ul')`
  font-weight: 300;
  padding: 2em 0 0 ${props => (props.noLeftPadding ? '0' : '5em')};
  margin: 0;
  display: flex;
  color: white;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const NavBarObjects = styled(Link)`
  list-style-type: none;
  margin: 0 5em 1em 0;
  padding: 0;
  border: 2px solid rgba(0, 0, 0, 0);

  &:link {
    color: white;
    text-decoration: none;
  }
  &:visited {
    color: white;
  }
  &:hover {
    border-bottom: 2px solid white;
    background-color: white;
    color: #c4797e;
    transition: color 0.2s;
  }
`;
const ResumeLink = styled('a').attrs({ target: '_blank' })`
  height: 1.6em;
  &:link,
  &:active,
  &:visited {
    color: currentColor;
    text-decoration: none;
  }

  &:hover {
    background-color: white;
    color: #c4797e;
    transition: color 0.2s;
  }
`;

const NavigationBar = ({ noLeftPadding }) => (
  <NavBar noLeftPadding={noLeftPadding}>
    <NavBarObjects activeStyle={{ borderBottom: '2px solid white' }} to="/">
      Home
    </NavBarObjects>

    <NavBarObjects
      activeStyle={{ borderBottom: '2px solid white' }}
      to="/designs"
    >
      Designs&etc
    </NavBarObjects>

    <ResumeLink href={withPrefix('files/TChang_Resume.pdf')}>Resume</ResumeLink>
  </NavBar>
);

export default NavigationBar;
