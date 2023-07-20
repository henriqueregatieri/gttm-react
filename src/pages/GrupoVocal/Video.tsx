import React from 'react';
import { YoutubeVideo } from '../../components/YouTubeVideo';

interface IProps {
  id: string;
  title: string;
}

export const Video: React.FC<IProps> = ({ id, title }) => {
  return (
    <div className='flex-initial mb-10'>
      <YoutubeVideo id={id} title={title} />
    </div>
  );
};
