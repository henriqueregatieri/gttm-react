import React from 'react';

interface IProps {
  id: string;
  title: string;
}

export const YoutubeVideo: React.FC<IProps> = ({ id, title }) => {
  return (
    <iframe
      title={title}
      src={`https://www.youtube.com/embed/${id}`}
      allow='encrypted-media'
      allowFullScreen
      frameBorder='0'
      height='315'
      width='560'
    ></iframe>
  );
};
