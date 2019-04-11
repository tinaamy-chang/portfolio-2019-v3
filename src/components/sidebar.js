import React from 'react';
import styled from 'styled-components';
import { Link, withPrefix } from 'gatsby';
import { Omelette } from './HamburgerOmelette';

const MenuItemLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 10px;
  color: white;
  transition: color 0.2s;
  font-size: 2rem;
  margin-top: 1rem;
`;

const MenuItemA = MenuItemLink.withComponent('a');

export default props => {
  return (
    <Omelette {...props}>
      <MenuItemLink className="menu-item" to="/">
        Home
      </MenuItemLink>

      <MenuItemLink className="menu-item" to="/designs">
        Designs&etc
      </MenuItemLink>

      <MenuItemA href={withPrefix('files/TChang_Resume.pdf')}>Resume</MenuItemA>
      <MenuItemA href="https://github.com/tinaamy-chang/tinastunas.com">
        Github
      </MenuItemA>
      <MenuItemA href="https://www.linkedin.com/in/tinastunas/">
        LinkedIn
      </MenuItemA>
    </Omelette>
  );
};
