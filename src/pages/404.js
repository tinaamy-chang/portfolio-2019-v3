import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NotFoundPage = () => (
  <Layout>
    <Container>
      <h1>Not Found</h1>
      <p>This page doesn't exist... yet.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
