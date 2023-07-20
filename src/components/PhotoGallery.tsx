import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styled from 'styled-components';

interface IProps {
  images: string[];
}

export const PhotoGallery: React.FC<IProps> = ({ images }) => {
  const newImages = images.map((image) => {
    return {
      original: image,
      thumbnail: image,
    };
  });

  return (
    <Div className='OIIIIIII'>
      <ImageGallery items={newImages} />
    </Div>
  );
};

const Div = styled.div`
  .image-gallery-content.fullscreen {
    .image-gallery-slide-wrapper {
      .image-gallery-slides {
        img {
          max-height: calc(100vh - 160px);
        }
      }
    }
    .image-gallery-thumbnails-wrapper {
    }
  }
`;
