import React from 'react';
import { FormattedMessage } from 'react-intl';

import css from './ListingPage.css';

const SectionVideosMaybe = ({ videos, fetchVideosError, fetchVideosInProgress }) => (
  <div className={css.sectionVideos}>
    <h2 className={css.videoTitle}>
      <FormattedMessage id="ListingPage.videosTitle" />
    </h2>
    <div>
      {!videos || fetchVideosInProgress ? (
        <FormattedMessage id="ListingPage.videosLoading" />
      ) : !!fetchVideosError ? (
        <FormattedMessage id="ListingPage.videosFailedToLoad" />
      ) : videos.length === 0 ? (
        <FormattedMessage id="ListingPage.videosEmpty" />
      ) : (
        <div className={css.videosContainer}>
          {videos.map((video, idx) => (
            <div
              key={idx}
              className={css.videoCard}
              style={{ backgroundImage: `url(${video.snippet.thumbnails.medium.url})` }}
            >
              {video.snippet.title.slice(0, 20)}
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default SectionVideosMaybe;
