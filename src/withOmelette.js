import React from 'react';
import {
  HamburgerOmeletteProvider,
  Hamburger,
} from './components/HamburgerOmelette';
import Menu from './components/sidebar';

const withOmelette = WrappedComponent => props => (
  <HamburgerOmeletteProvider>
    <WrappedComponent {...props} />
    <Hamburger />
    <Menu />
  </HamburgerOmeletteProvider>
);

export default withOmelette;
