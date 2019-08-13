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
    key: 'musicproduction',
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
  {
    key: 'graphicdesign',
    label: 'Graphic Design',
  },
  {
    key: 'photography',
    label: 'Photography',
  },
  {
    key: 'videography',
    label: 'Videography',
  },
  {
    key: 'promoter',
    label: 'Promoter',
  },
];

export const categories = [
  { key: 'singer', label: 'Singer' },
  { key: 'rapper', label: 'Rapper' },
  { key: 'lightingtech', label: 'Lighting Tech' },
  { key: 'audioengineer', label: 'Audio Engineer' },
  { key: 'drummer', label: 'Drummer' },
  { key: 'guitarist', label: 'Guitarist' },
  { key: 'pianist', label: 'Pianist' },
  { key: 'bassist', label: 'Bassist' },
  { key: 'eventproducer', label: 'Event Producer' },
  { key: 'stagehand', label: 'Stage Hand' },
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
