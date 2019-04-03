import React from 'react';

import SelectedTemplate from '../../components/SelectedTemplate';

import h1 from '../../images/selectedprojects/6PiecesofHer/OptimizedHer/h1.jpg';
import h2 from '../../images/selectedprojects/6PiecesofHer/OptimizedHer/h2.jpg';
import h3 from '../../images/selectedprojects/6PiecesofHer/OptimizedHer/h3.jpg';
import h4 from '../../images/selectedprojects/6PiecesofHer/OptimizedHer/h4.jpg';
import h5 from '../../images/selectedprojects/6PiecesofHer/OptimizedHer/h5.jpg';
import h6 from '../../images/selectedprojects/6PiecesofHer/OptimizedHer/h6.jpg';
import h7 from '../../images/selectedprojects/6PiecesofHer/OptimizedHer/h7.jpg';

const piecesimages = [h1, h2, h3, h4, h5, h6, h7];

const piecesofher = () => (
  <div>
    <SelectedTemplate images={piecesimages} name="Pieces of Her" />
  </div>
);

export default piecesofher;
