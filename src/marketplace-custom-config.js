/*
 * Marketplace specific configuration.
 */

export const skills = [
  {
    key: 'singing',
    label: 'Singing',
  },
  {
    key: 'rap',
    label: 'Rap',
  },
  {
    key: 'bass',
    label: 'Bass',
  },
  {
    key: 'drummer',
    label: 'Drummer',
  },
  {
    key: 'musicproduce',
    label: 'Music Production',
  },
  {
    key: 'dj',
    label: 'DJ',
  },
  {
    key: 'audioengineer',
    label: 'Audio Engineer',
  },
  {
    key: 'guitarist',
    label: 'Guitar',
  },
  {
    key: 'piano',
    label: 'Piano',
  },
  
  
];

export const categories = [
  //Performers
  // {
  //   key: 'performers',
  //   label: 'Performer',
  //   subCategories: [
      { key: 'singer', label: 'Singer' },
      { key: 'rapper', label: 'Rapper' },
      { key: 'backgroundvocalist', label: 'Background Vocalist' },
      { key: 'dancer', label: 'Dancer' },
  //   ],
  //  },
  
  //Musicians
  // {
  //   key: 'musicians',
  //   label: 'Musicians',
  //   subCategories: [
      { key: 'drummer', label: 'Drummer' },
      { key: 'guitarist', label: 'Guitarist' },
      { key: 'pianist', label: 'Pianist' },
      { key: 'bassist', label: 'Bassist' },
  //   ],
  // },

  //Event Production
  // {
  //   key: 'production',
  //   label: 'Production',
  //   subCategories: [
      { key: 'lightingtech', label: 'Lighting Tech' },
      { key: 'stagehand', label: 'Stage Hand/Production Crew' },
      { key: 'promotionevents', label: 'Event Promotion' },
      { key: 'audioengineer', label: 'Audio Engineer' },
  //   ],
  // },
  //Music Production
  { key: 'producer', label: 'Producer' },
  { key: 'recordingengineer', label: 'Recording Engineer' },
  { key: 'mixingengineer', label: 'Mixing Engineer' },
  { key: 'masteringengineer', label: 'Mastering Engineer' },
  { key: 'studio', label: 'Studio Engineer' },
  //Public Relations
  { key: 'pr', label: 'PR specialist' },
  { key: 'blogger', label: 'Blogger' },
  { key: 'radiopromoter', label: 'Radio Promoter' },
  { key: 'socialmediaspecialist', label: 'Social Media Strategist' },
  { key: 'podcaster', label: 'Podcaster' },
  { key: 'videohost', label: 'Video Host' },
  { key: 'radiohost', label: 'Radio Host' },
  { key: 'streetteam', label: 'Street Team' },
  //Creatives
  { key: 'graphicdesigner', label: 'Graphic Designer' },
  { key: 'photographer', label: 'Photographer' },
  { key: 'videographer', label: 'Videographer' },
  { key: 'eventplanner', label: 'Event Planner' },
  
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 1000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};
