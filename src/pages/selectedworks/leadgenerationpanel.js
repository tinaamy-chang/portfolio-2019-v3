import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import SelectedTemplate from '../../components/SelectedTemplate';

import l1 from '../../images/selectedprojects/3LeadGenerationPanel/OptimizedLead/l1.jpg';
import l2 from '../../images/selectedprojects/3LeadGenerationPanel/OptimizedLead/l2.jpg';
import l3 from '../../images/selectedprojects/3LeadGenerationPanel/OptimizedLead/l3.jpg';
import l4 from '../../images/selectedprojects/3LeadGenerationPanel/OptimizedLead/l4.jpg';
import l5 from '../../images/selectedprojects/3LeadGenerationPanel/OptimizedLead/l5.jpg';
import l6 from '../../images/selectedprojects/3LeadGenerationPanel/OptimizedLead/l6.jpg';

const leadimages = [l1, l2, l3, l4, l5, l6];

const leadgenerationpanel = () => (
  <div>
    <SelectedTemplate images={leadimages} name="Lead Generation Panel" />
  </div>
);

export default leadgenerationpanel;
