import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import SelectedTemplate from '../../components/SelectedTemplate';

import g1 from '../../images/selectedprojects/4GreatBarrier/OptimizedGreat/g1.jpg';
import g2 from '../../images/selectedprojects/4GreatBarrier/OptimizedGreat/g2.jpg';
import g3 from '../../images/selectedprojects/4GreatBarrier/OptimizedGreat/g3.jpg';
import g4 from '../../images/selectedprojects/4GreatBarrier/OptimizedGreat/g4.jpg';
import g5 from '../../images/selectedprojects/4GreatBarrier/OptimizedGreat/g5.jpg';
import g6 from '../../images/selectedprojects/4GreatBarrier/OptimizedGreat/g6.jpg';

const whgbrimages = [g1, g2, g3, g4, g5, g6];

const whgbr = () => (
  <div>
    <SelectedTemplate
      images={whgbrimages}
      name="What Happened to the Great Barrier Reef?"
    />
  </div>
);

export default whgbr;
