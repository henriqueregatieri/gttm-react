import { PhotoGallery } from 'components/PhotoGallery';
import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import styled from 'styled-components';

export const Photos: React.FC = () => {
  const images = [
    '/images/grupo-vocal/gallery/1176177_1395957527299397_2043316140_n.jpg',
    '/images/grupo-vocal/gallery/1234163_581491298581173_1767480757_n.jpg',
    '/images/grupo-vocal/gallery/15c0e722f36b72b61e44fbb7f0204fca.jpg',
    '/images/grupo-vocal/gallery/17_08_2008 073.jpg',
    '/images/grupo-vocal/gallery/389529_184556458347777_747747459_n.jpg',
    '/images/grupo-vocal/gallery/534331_522854724459371_989589813_n.jpg',
    '/images/grupo-vocal/gallery/565034_4697607248330_401979963_n.jpg',
    '/images/grupo-vocal/gallery/DSC_0117.JPG',
    '/images/grupo-vocal/gallery/IMG_0977.JPG',
    '/images/grupo-vocal/gallery/IMG_2236.JPG',
    '/images/grupo-vocal/gallery/be630ef3b5951df542220fe70fbfae77.jpg',
    '/images/grupo-vocal/gallery/1188_596511693745800_1690717538_n.jpg',
    '/images/grupo-vocal/gallery/1381489_596518570411779_1258718285_n.jpg',
    '/images/grupo-vocal/gallery/17_08_2008 020.jpg',
    '/images/grupo-vocal/gallery/20130915_141805.jpg',
    '/images/grupo-vocal/gallery/525463_379329668811878_491206073_n.jpg',
    '/images/grupo-vocal/gallery/546980_4697608008349_59844695_n.jpg',
    '/images/grupo-vocal/gallery/601514_581492778581025_269109089_n.jpg',
    '/images/grupo-vocal/gallery/DSC_0278.JPG',
    '/images/grupo-vocal/gallery/IMG_0980.JPG',
    '/images/grupo-vocal/gallery/MESA DE SOM.jpg',
    '/images/grupo-vocal/gallery/1234163_581491298581173_1767480757_n (1).jpg',
    '/images/grupo-vocal/gallery/1385755_661051547252205_1311381485_n.jpg',
    '/images/grupo-vocal/gallery/17_08_2008 027.jpg',
    '/images/grupo-vocal/gallery/253091_4697588727867_1965504277_n - Copia.jpg',
    '/images/grupo-vocal/gallery/525518_4697609288381_954252157_n.jpg',
    '/images/grupo-vocal/gallery/561833_4697646209304_552128263_n.jpg',
    '/images/grupo-vocal/gallery/DSC02782.JPG',
    '/images/grupo-vocal/gallery/Fotografia0111.jpg',
    '/images/grupo-vocal/gallery/IMG_2234.JPG',
    '/images/grupo-vocal/gallery/PICT1016.JPG',
  ];

  return (
    <div className='mx-64'>
      <PhotoGallery images={images} />
    </div>
  );
};
