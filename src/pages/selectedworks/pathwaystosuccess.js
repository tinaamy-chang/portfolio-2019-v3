import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import SelectedTemplate from '../../components/SelectedTemplate';

import p1 from '../../images/selectedprojects/1Pathways/OptimizedPathways/p1.jpg';
import p2 from '../../images/selectedprojects/1Pathways/OptimizedPathways/p2.jpg';
import p3 from '../../images/selectedprojects/1Pathways/OptimizedPathways/p3.jpg';
import p4 from '../../images/selectedprojects/1Pathways/OptimizedPathways/p4.jpg';
import p5 from '../../images/selectedprojects/1Pathways/OptimizedPathways/p5.jpg';
import p6 from '../../images/selectedprojects/1Pathways/OptimizedPathways/p6.jpg';
import p7 from '../../images/selectedprojects/1Pathways/OptimizedPathways/p7.jpg';
import p8 from '../../images/selectedprojects/1Pathways/OptimizedPathways/p8.jpg';

const pathwaysimages = [p1, p2, p3, p4, p5, p6, p7, p8];

const pathwaystosuccess = () => (
  <div>
    <SelectedTemplate images={pathwaysimages} name="Pathways to Success" />
  </div>
);

export default pathwaystosuccess;
