import React from 'react';
import styled from 'styled-components';

const OpenContext = React.createContext({
  open: false,
  toggle: () => {},
});

const HamburgerContainer = styled('div')`
  position: fixed;
  top: 8px;
  right: 8px;
  height: 2rem;
  width: 2rem;
  z-index: 1000;
  cursor: pointer;

  @media (min-width: 600px) {
    display: none;
  }
`;

const HamburgerBar = styled('div')`
  background: rgba(30, 30, 30, 0.8);
  position: absolute;
  height: 7px;
  width: 100%;
  left: 0;
  z-index: 1001;
  cursor: pointer;
`;

const HamburgerButton = styled('button')`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0.0001;
  z-index: 1002;
  cursor: pointer;
`;

export class HamburgerOmeletteProvider extends React.Component {
  state = { open: false };

  toggle = () => {
    this.setState(({ open }) => ({ open: !open }));
  };

  render() {
    const { open } = this.state;
    const { children } = this.props;
    return (
      <OpenContext.Provider value={{ open, toggle: this.toggle }}>
        {children}
      </OpenContext.Provider>
    );
  }
}

export const Hamburger = () => (
  <OpenContext.Consumer>
    {({ open, toggle }) => (
      <HamburgerContainer>
        <HamburgerBar style={{ top: '0%' }} />
        <HamburgerBar style={{ top: '40%' }} />
        <HamburgerBar style={{ top: '80%' }} />
        <HamburgerButton onClick={toggle} />
      </HamburgerContainer>
    )}
  </OpenContext.Consumer>
);

const OmeletteContainer = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  max-width: 100vw;
  z-index: 5000;
  background: linear-gradient(130deg, #c4797e, #dbbfb3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OmeletteClose = styled('button')`
  position: absolute;
  top: 0px;
  right: 8px;
  z-index: 5005;
  color: rgba(30, 30, 30, 0.8);
  background: transparent;
  border: none;
  font-size: 3rem;
  cursor: pointer;
`;

export const Omelette = ({ children }) => (
  <OpenContext.Consumer>
    {({ open, toggle }) =>
      open && (
        <OmeletteContainer>
          <OmeletteClose onClick={toggle}>×</OmeletteClose>
          {children}
        </OmeletteContainer>
      )
    }
  </OpenContext.Consumer>
);
