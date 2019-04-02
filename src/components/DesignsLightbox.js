import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import bunclicker from '../images/designimages/bunclicker.jpg';
import dirtywords from '../images/designimages/dirty-words.jpg';
import doughnuts from '../images/designimages/doughnuts.jpg';
import fatcat from '../images/designimages/fatcat.jpg';
import fawns from '../images/designimages/fawns.jpg';
import fishpattern from '../images/designimages/fish-pattern.jpg';
import fish from '../images/designimages/fish.jpg';
import galaxtea from '../images/designimages/galaxtea.jpg';
import hamstickers from '../images/designimages/hamstickers.png';
import milkley from '../images/designimages/milkley.jpg';
import ruth1 from '../images/designimages/ruth1.jpg';
import ruth2 from '../images/designimages/ruth2.jpg';
import stardog from '../images/designimages/stardog.jpg';
import stilllife from '../images/designimages/still-life.jpg';
import subbird from '../images/designimages/subbird.jpg';

const IMAGES = [
  {
    src: subbird,
    thumbnail: subbird,
    caption: 'Character Assets for a mini game made in Unity called SubBird',
  },
  {
    src: bunclicker,
    thumbnail: bunclicker,
    caption: 'Character designs for a brower game called BunClicker',
  },
  {
    src: doughnuts,
    thumbnail: doughnuts,
    caption: 'Doughnut graphics',
  },
  {
    src: fishpattern,
    thumbnail: fishpattern,
    caption: 'Fish Icons, made to pattern',
  },
  {
    src: fish,
    thumbnail: fish,
    caption: 'Fish, illustrated',
  },
  {
    src: galaxtea,
    thumbnail: galaxtea,
    caption: 'Galaxtea',
  },
  {
    src: milkley,
    thumbnail: milkley,
    caption: 'An Illustation',
  },
  {
    src: ruth1,
    thumbnail: ruth1,
    caption: 'Logo proposal for Ruth Asawa School of the Arts (Version 1)',
  },
  {
    src: ruth2,
    thumbnail: ruth2,
    caption: 'Logo proposal for Ruth Asawa School of the Arts (Version 2)',
  },
  {
    src: hamstickers,
    thumbnail: hamstickers,
    caption: 'Hamster stickers for iOS',
  },
  {
    src: dirtywords,
    thumbnail: dirtywords,
    caption: 'Typography meets Photography',
  },
  {
    src: stardog,
    thumbnail: stardog,
    caption: 'A sewing project for my nephew, born year of the dog',
  },

  {
    src: fawns,
    thumbnail: fawns,
    caption: 'Fawns',
  },

  {
    src: fatcat,
    thumbnail: fatcat,
    caption: 'Painting of a fluffy cat',
  },

  {
    src: stilllife,
    thumbnail: stilllife,
    caption: 'Still Life Painting',
  },
];

const DesignsLightbox = () => {
  return (
    <Gallery
      images={IMAGES}
      enableImageSelection={false}
      rowHeight="270px"
      margin="10px"
    />
  );
};

export default DesignsLightbox;
