import React from 'react';
import { VideoCardContainer } from './styles';

interface ParamsGetYoutubeId {
  youtubeURL: string,
  replace: any
}

const getYouTubeId: React.FC<ParamsGetYoutubeId> = (youtubeURL) => {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

interface ParamsVideoCard {
  videoTitle: string,
  videoURL: any,
  categoryColor: string
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    url?: string;
  }
}

const VideoCard: React.FC<ParamsVideoCard> = ({ videoTitle, videoURL, categoryColor }) => {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;

  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    />
  );
}

export default VideoCard;
