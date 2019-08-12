import config from '../config';

const getYoutubeAPI = () =>
  /* eslint-disable-next-line no-undef */
  gapi.client.init({
    apiKey: config.youtubeAPIKey,
    discoveryDocs: [
      'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest',
    ],
  });

export default { configure: getYoutubeAPI };
