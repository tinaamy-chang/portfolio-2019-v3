import React from 'react';

import SelectedTemplate from '../../components/SelectedTemplate';

import b1 from '../../images/selectedprojects/2BunLife/OptimizedBunLife/b1.jpg';
import b2 from '../../images/selectedprojects/2BunLife/OptimizedBunLife/b2.jpg';
import b3 from '../../images/selectedprojects/2BunLife/OptimizedBunLife/b3.jpg';
import b4 from '../../images/selectedprojects/2BunLife/OptimizedBunLife/b4.jpg';
import b5 from '../../images/selectedprojects/2BunLife/OptimizedBunLife/b5.jpg';
import b6 from '../../images/selectedprojects/2BunLife/OptimizedBunLife/b6.jpg';
import b7 from '../../images/selectedprojects/2BunLife/OptimizedBunLife/b7.jpg';
import b8 from '../../images/selectedprojects/2BunLife/OptimizedBunLife/b8.jpg';

const bunlifeimages = [b1, b2, b3, b4, b5, b6, b7, b8];

const bunlife = () => (
  <div>
    <SelectedTemplate images={bunlifeimages} name="BunLife" />
  </div>
);

export default bunlife;
