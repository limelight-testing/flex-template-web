import { google } from 'googleapis';
import config from '../config';

const youtube = google.youtube({ version: 'v3', auth: config.youtubeAPIKey });

export default youtube;
