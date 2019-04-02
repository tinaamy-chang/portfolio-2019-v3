import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Menu from '../../components/sidebar';
import './layout.css';

const Container = styled('div')`
  width: 100vw;
  max-width: 100%;
`;

const Inner = styled('main')`
  width: 100vw;
  max-width: 100%;
`;

const Layout = ({ children, dynamic }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: "Tina's Tunas" },
            {
              name: 'keywords',
              content: 'tina, chang, design, visual, communication, portfolio',
            },
          ]}
        >
          <html lang="en" />
          <style>
            {`
            h1, h2, h3, h4, h5, h6, p {
              max-width: 100%;
            }
            `}
          </style>
          <script src="https://cdn.polyfill.io/v2/polyfill.js?features=default,Symbol" />
        </Helmet>
        <Container id="app-container">
          <Menu right outerContainerId="app-container" pageWrapId="page-wrap" />
          <Inner id="page-wrap">{children}</Inner>
        </Container>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
