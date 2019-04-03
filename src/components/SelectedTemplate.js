import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Menu from '../components/sidebar';
import NavigationBar from '../components/NavigationBar';
import TopNav from '../components/TopNav';
import withOmelette from '../withOmelette';

const ImageContainer = styled('div')``;

const ImageStyle = styled('img')`
  max-width: 100%;
  padding-bottom: 0;
  margin-bottom: 0;
`;

const Bottom = styled('div')`
  margin: 2em;
`;

const Title = styled('h2')`
  font-size: 3em;
`;

const BackButton = styled(Link)`
  margin: 1em 0;
  padding: 1em 2.5em;
  font-size: 1.1em;
  color: white;
  background-color: #c4797e;
  text-decoration: none;
  display: inline-block;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 0.2em;

  &:hover {
    background-color: #dbbfb3;
    transition: color 0.2s;
  }
`;

const SelectedTemplate = ({ images, name }) => {
  return (
    <div>
      <TopNav>
        <NavigationBar />
      </TopNav>
      <Bottom>
        <Title>{name}</Title>
        <ImageContainer>
          {images.map(z => (
            <ImageStyle key={z} src={z} />
          ))}
        </ImageContainer>
        <BackButton to="/">Back to Home</BackButton>
      </Bottom>
    </div>
  );
};

export default withOmelette(SelectedTemplate);
