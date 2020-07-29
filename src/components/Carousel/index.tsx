import React, { useRef } from 'react';
import { VideoCardGroupContainer, VideoCardList, Title, ExtraLink } from './styles';
import VideoCard from './VideoCard';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

interface ParamsVideoCard {
  ignoreFirstVideo?: boolean;
  category: any;
}

const VideoCardGroup: React.FC<ParamsVideoCard> = ({ ignoreFirstVideo, category }) => {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>{categoryTitle}</Title>
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
        </>
      )}
      <VideoCardList className="container-carousel">
        <section className="carousel">
          {videos.map((video: any, index: number) => {
            if (ignoreFirstVideo && index === 0) {
              return null;
            }

            return (
              <li key={video.titulo}>
                <VideoCard videoTitle={video.titulo} videoURL={video.url} categoryColor={categoryColor} />
              </li>
            );
          })}
        </section>
      </VideoCardList>
    </VideoCardGroupContainer>
  );
};

export default VideoCardGroup;
