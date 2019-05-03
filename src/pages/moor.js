import React from 'react';

import SelectedTemplate from '../components/SelectedTemplate';

import m1 from '../images/selectedprojects/5Moor/OptimizedMoor/m1.jpg';
import m2 from '../images/selectedprojects/5Moor/OptimizedMoor/m2.jpg';
import m3 from '../images/selectedprojects/5Moor/OptimizedMoor/m3.jpg';
import m4 from '../images/selectedprojects/5Moor/OptimizedMoor/m4.jpg';
import m5 from '../images/selectedprojects/5Moor/OptimizedMoor/m5.jpg';
import m6 from '../images/selectedprojects/5Moor/OptimizedMoor/m6.jpg';
import m7 from '../images/selectedprojects/5Moor/OptimizedMoor/m7.jpg';
import m8 from '../images/selectedprojects/5Moor/OptimizedMoor/m8.jpg';
import m9 from '../images/selectedprojects/5Moor/OptimizedMoor/m9.jpg';
import m10 from '../images/selectedprojects/5Moor/OptimizedMoor/m10.jpg';

const moorimages = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10];

const moor = () => (
  <div>
    <SelectedTemplate images={moorimages} name="'Moor" />
  </div>
);

export default moor;
