import axios from 'axios';
import config from '../config';

const fetchFromYoutube = (endpoint, params) =>
  axios.get(`https://www.googleapis.com/youtube/v3/${endpoint}`, {
    params: {
      key: config.youtubeAPIKey,
      ...params,
    },
  });

export default fetchFromYoutube;
