import React from 'react';
import { string } from 'prop-types';

import classNames from 'classnames';
import { NamedLink } from '../../components';

import css from './SectionHero.css';

const SectionHero = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>Hire entertainment professionals near you.</h1>
        <h2 className={css.heroSubTitle}>
          The largest online community for entertainment professionals.
        </h2>
        <NamedLink
          name="SearchPage"
          to={{
            search:
              's?address=Atlanta%2C%20USA&bounds=33.8876179%2C-84.289389%2C33.6478079%2C-84.5518189',
          }}
          className={css.heroButton}
        >
          Browse local talent
        </NamedLink>
      </div>
    </div>
  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;
