import React from 'react';
import styled from 'styled-components';

import profile from '../images/profile/profile.jpg';
import pathwaysthumb from '../images/selectedprojects/thumbnails/optimizedthumbnails/1pathways.jpg';
import bunlifethumb from '../images/selectedprojects/thumbnails/optimizedthumbnails/2bunlife.jpg';
import leadthumb from '../images/selectedprojects/thumbnails/optimizedthumbnails/3leadgeneration.jpg';
import greatthumb from '../images/selectedprojects/thumbnails/optimizedthumbnails/4greatbarrier.jpg';
import moorthumb from '../images/selectedprojects/thumbnails/optimizedthumbnails/5moor.jpg';
import piecesthumb from '../images/selectedprojects/thumbnails/optimizedthumbnails/6piecesofher.jpg';

import NavigationBar from '../components/NavigationBar';
import Thumbnail from '../components/Thumbnail';
import TopNav from '../components/TopNav';

import withOmelette from '../withOmelette';

const PictureHolder = styled('div')`
  max-width: 27em;
  padding: 0em 3.3em;
  margin: 0em 0.5em 0em 4.1em;
  margin-bottom: 1px;

  @media only screen and (max-width: 1137px) {
    margin: 0em 1em 1.5em 0;
    padding: 0;
    max-width: 20em;
  }
`;

const Picture = styled('img')`
  display: block;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  border-left: 4px solid white;
  border-right: 4px solid white;
  @media only screen and (max-width: 1180px) {
    border: 4px solid white;
    margin: 2em 0 1.5em 0;
    padding: 0;
  }
`;
const IntroHeading = styled('h1')`
  font-weight: 400;
  color: white;
`;
const IntroInfo = styled('div')`
  font-weight: 300;
  color: white;
  margin-top: 0;
`;

const ProjectSection = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 3.5em 1em;
`;

const GitHubLink = styled('a')`
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

const IndexPage = () => {
  return (
    <div>
      <TopNav>
        <PictureHolder>
          <Picture alt="Picture of Tina" src={profile} />
        </PictureHolder>
        <IntroInfo>
          <IntroHeading>Hello, I am Tina Chang</IntroHeading>
          <p>Frontend Developer at Bio-Rad Laboratories</p>
          <p>
            Visual Communications Design
            <br />
            San Francisco State University 2019
          </p>

          <p>
            Passionate about frontend development combined with UI, UX, and
            Graphics.
            <br />I design and develop for work and leisure. Adobe Illustrator
            is my partner in crime.
          </p>
          <p>
            This website was developed using ReactJS & GatsbyJS.{' '}
            <GitHubLink
              href={'https://github.com/tinaamy-chang/tinastunas.com'}
            >
              Check out the code here.
            </GitHubLink>
          </p>
          <NavigationBar noLeftPadding />
        </IntroInfo>
      </TopNav>
      <ProjectSection>
        <Thumbnail
          src={pathwaysthumb}
          hoverText="Pathways to Success"
          alt="Pathways to Success"
          linkTo="pathwaystosuccess"
          hoverBackground="rgba(246,144,79,0.9)"
        />
        <Thumbnail
          src={bunlifethumb}
          hoverText="BunLife"
          alt="BunLife"
          linkTo="bunlife"
          hoverBackground="rgba(166,175,216,0.9)"
        />
        <Thumbnail
          src={leadthumb}
          hoverText="Lead Generation Panel"
          alt="Lead Generation Panel"
          linkTo="leadgenerationpanel"
          hoverBackground="rgba(65,127,194,0.9)"
        />
        <Thumbnail
          src={greatthumb}
          hoverText="What Happened to the Great Barrier Reef?"
          alt="What Happened to the Great Barrier Reef?"
          linkTo="whgbr"
          hoverBackground="rgba(65,152,194,0.9)"
        />
        <Thumbnail
          src={moorthumb}
          hoverText="'Moor"
          alt="'Moor"
          linkTo="moor"
          hoverBackground="rgba(232,39,102,0.9)"
        />
        <Thumbnail
          src={piecesthumb}
          hoverText="Pieces of Her"
          alt="Pieces of Her"
          linkTo="piecesofher"
          hoverBackground="rgba(160,188,219,0.9)"
        />
      </ProjectSection>
    </div>
  );
};

export default withOmelette(IndexPage);
