import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ExternalLink } from '../../components';
import { parseISO8601Duration } from '../../util/dates';

import css from './ListingPage.css';

// String.prototype.padStart() polyfill gotten from MDN.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#Polyfill
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0; //truncate if number, or convert non-number to 0;
    padString = String(typeof padString !== 'undefined' ? padString : ' ');
    if (this.length >= targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return padString.slice(0, targetLength) + String(this);
    }
  };
}

const VideoCard = ({ video }) => {
  const { hours, minutes, seconds } = parseISO8601Duration(video.contentDetails.duration);
  let duration = '';
  const getTimeUnitAsString = timeUnit => (timeUnit ? String(timeUnit).padStart(2, '0') : '00');
  const secondsAsString = getTimeUnitAsString(seconds);
  const minutesAsString = getTimeUnitAsString(minutes);
  const hoursAsString = getTimeUnitAsString(hours);
  duration = `${minutesAsString}:${secondsAsString}`;

  if (hours) {
    duration = `${hoursAsString}:${duration}`;
  }

  return (
    <ExternalLink
      href={`https://www.youtube.com/watch?v=${video.id}`}
      className={css.videoCard}
      style={{ backgroundImage: `url(${video.snippet.thumbnails.medium.url})` }}
    >
      <span className={css.videoDuration}>{duration}</span>
    </ExternalLink>
  );
};

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
            <VideoCard key={idx} video={video} />
          ))}
        </div>
      )}
    </div>
  </div>
);

export default SectionVideosMaybe;
