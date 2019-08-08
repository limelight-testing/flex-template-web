import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import atlantaImage from './images/atl.jpg';
import sfImage from './images/sf.jpg';
import losAngelesImage from './images/la.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>Find entertainment professionals in your city</div>
      <div className={css.locations}>
        {locationLink(
          'Atlanta',
          atlantaImage,
          'address=Atlanta%2C%20USA&bounds=33.8876179%2C-84.289389%2C33.6478079%2C-84.5518189'
        )}
        {locationLink(
          'Bay Area',
          sfImage,
          'address=San%20Francisco%20Bay%20Area%2C%20USA&bounds=38.8642448%2C-121.208178%2C36.8941549%2C-123.632497'
        )}
        {locationLink(
          'Los Angeles',
          losAngelesImage,
          'address=Los%20Angeles%2C%20USA&bounds=34.3373061%2C-118.1552891%2C33.7036519%2C-118.6681759'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
