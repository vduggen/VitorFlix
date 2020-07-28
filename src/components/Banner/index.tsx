import React from 'react';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';
import VideoIframeResponsive from './VideoIframeResponsive';

interface getYoutubeIdParams {
  youtubeURL: string
  replace: any
}

const getYouTubeId: React.FC<getYoutubeIdParams> = youtubeURL => youtubeURL.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,'$7',);

interface ParamsBanner {
  videoTitle: string,
  videoDescription: string,
  url: any
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    backgroundImage?: string;
  }
}

const Banner: React.FC<ParamsBanner> = ({ videoTitle, videoDescription, url}) => {
  const youTubeID = getYouTubeId(url);
  const bgUrl: string = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <div>
          <h2>
            {videoTitle}
          </h2>

          <p>
            {videoDescription}
          </p>
        </div>

        <div>
          <VideoIframeResponsive
            youtubeID={youTubeID}
          />
          <WatchButton>
            Assistir
          </WatchButton>
        </div>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}

export default Banner;
