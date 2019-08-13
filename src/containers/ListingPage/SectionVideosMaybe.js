import React from 'react';
import { FormattedMessage } from 'react-intl';

import css from './ListingPage.css';

const SectionVideosMaybe = ({ videos, fetchVideosError, fetchVideosInProgress }) => (
  <div className={css.sectionVideos}>
    <h2 className={css.videoTitle}>
      <FormattedMessage id="ListingPage.videosTitle" />
    </h2>
    <div>
      {fetchVideosInProgress ? (
        <FormattedMessage id="ListingPage.videosLoading" />
      ) : !!fetchVideosError ? (
        <FormattedMessage id="ListingPage.videosFailedToLoad" />
      ) : videos.length === 0 ? (
        <FormattedMessage id="ListingPage.videosEmpty" />
      ) : (
        <div>
          {videos.map((video, idx) => (
            <div key={idx}>Video</div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default SectionVideosMaybe;
