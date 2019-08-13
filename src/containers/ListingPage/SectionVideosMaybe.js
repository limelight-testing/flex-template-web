import React from 'react';
import { FormattedMessage } from 'react-intl';

import css from './ListingPage.css';

const SectionVideosMaybe = ({ videos, fetchVideosError, fetchVideosInProgress }) => (
  <div className={css.sectionVideos}>
    <h2 className={css.videoTitle}>
      <FormattedMessage id="ListingPage.videoTitle" />
    </h2>
    Num vids: {videos.length}
    <br />
    Fetching in progress: {fetchVideosInProgress}
    <br />
    Fetching failed: {!!fetchVideosError}
    <br />
  </div>
);

export default SectionVideosMaybe;
