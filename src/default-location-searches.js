import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-atlanta',
    predictionPlace: {
      address: 'Atlanta, USA',
      bounds: new LatLngBounds(
        new LatLng(33.8876179, -84.289389),
        new LatLng(33.6478079, -84.5518189)
      ),
    },
  },
  {
    id: 'default-sf-bay-area',
    predictionPlace: {
      address: 'San Francisco Bay Area, USA',
      bounds: new LatLngBounds(
        new LatLng(38.8642448, -121.208178),
        new LatLng(36.8941549, -123.632497)
      ),
    },
  },
  {
    id: 'default-los-angeles',
    predictionPlace: {
      address: 'Los Angeles, USA',
      bounds: new LatLngBounds(
        new LatLng(34.3373061, -118.1552891),
        new LatLng(33.7036519, -118.6681759)
      ),
    },
  },
];
