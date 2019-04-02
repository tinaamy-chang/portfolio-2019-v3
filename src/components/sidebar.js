import React from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import { Link, withPrefix } from 'gatsby';

export default props => {
  return (
    <Menu right={props.right}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/designs">
        Designs&etc
      </a>

      <a className="menu-item" href={withPrefix('files/TChang_Resume.pdf')}>
        Resume
      </a>
    </Menu>
  );
};
