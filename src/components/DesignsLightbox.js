import React from 'react';
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
import bunclickerthumb from '../images/designimages/thumbnails/bunclicker.jpg';
import dirtywordsthumb from '../images/designimages/thumbnails/dirty-words.jpg';
import doughnutsthumb from '../images/designimages/thumbnails/doughnuts.jpg';
import fatcatthumb from '../images/designimages/thumbnails/fatcat.jpg';
import fawnsthumb from '../images/designimages/thumbnails/fawns.jpg';
import fishpatternthumb from '../images/designimages/thumbnails/fish-pattern.jpg';
import fishthumb from '../images/designimages/thumbnails/fish.jpg';
import galaxteathumb from '../images/designimages/thumbnails/galaxtea.jpg';
import hamstickersthumb from '../images/designimages/thumbnails/hamstickers.jpg';
import milkleythumb from '../images/designimages/thumbnails/milkley.jpg';
import ruth1thumb from '../images/designimages/thumbnails/ruth1.jpg';
import ruth2thumb from '../images/designimages/thumbnails/ruth2.jpg';
import stardogthumb from '../images/designimages/thumbnails/stardog.jpg';
import stilllifethumb from '../images/designimages/thumbnails/still-life.jpg';
import subbirdthumb from '../images/designimages/thumbnails/subbird.jpg';

const IMAGES = [
  {
    src: subbird,
    thumbnail: subbirdthumb,
    caption: 'Character Assets for a mini game made in Unity called SubBird',
  },
  {
    src: bunclicker,
    thumbnail: bunclickerthumb,
    caption: 'Character designs for a brower game called BunClicker',
  },
  {
    src: doughnuts,
    thumbnail: doughnutsthumb,
    caption: 'Doughnut graphics',
  },
  {
    src: fishpattern,
    thumbnail: fishpatternthumb,
    caption: 'Fish Icons, made to pattern',
  },
  {
    src: fish,
    thumbnail: fishthumb,
    caption: 'Fish, illustrated',
  },
  {
    src: galaxtea,
    thumbnail: galaxteathumb,
    caption: 'Galaxtea',
  },
  {
    src: milkley,
    thumbnail: milkleythumb,
    caption: 'An Illustation',
  },
  {
    src: ruth1,
    thumbnail: ruth1thumb,
    caption: 'Logo proposal for Ruth Asawa School of the Arts (Version 1)',
  },
  {
    src: ruth2,
    thumbnail: ruth2thumb,
    caption: 'Logo proposal for Ruth Asawa School of the Arts (Version 2)',
  },
  {
    src: hamstickers,
    thumbnail: hamstickersthumb,
    caption: 'Hamster stickers for iOS',
  },
  {
    src: dirtywords,
    thumbnail: dirtywordsthumb,
    caption: 'Typography meets Photography',
  },
  {
    src: stardog,
    thumbnail: stardogthumb,
    caption: 'A sewing project for my nephew, born year of the dog',
  },

  {
    src: fawns,
    thumbnail: fawnsthumb,
    caption: 'Fawns',
  },

  {
    src: fatcat,
    thumbnail: fatcatthumb,
    caption: 'Painting of a fluffy cat',
  },

  {
    src: stilllife,
    thumbnail: stilllifethumb,
    caption: 'Still Life Painting',
  },
];

const DesignsLightbox = () => {
  return (
    <Gallery
      images={IMAGES}
      enableImageSelection={false}
      rowHeight="auto"
      tileViewportStyle={() => ({ background: 'white' })}
      margin="10px"
    />
  );
};

export default DesignsLightbox;
