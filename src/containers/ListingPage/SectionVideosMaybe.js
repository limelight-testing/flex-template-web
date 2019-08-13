import React from 'react';

const SectionVideosMaybe = ({ videos, fetchVideosError, fetchVideosInProgress }) => (
  <div>
    Num vids: {videos.length}
    <br />
    Fetching in progress: {fetchVideosInProgress}
    <br />
    Fetching failed: {!!fetchVideosError}
    <br />
  </div>
);

export default SectionVideosMaybe;
