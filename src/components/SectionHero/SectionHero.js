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
        <h1 className={css.heroMainTitle}>
          Hire entertainment professionals near you.
        </h1>
        <h2 className={css.heroSubTitle}>
          The largest online community for entertainment professionals.
        </h2>
        <NamedLink
          name="SearchPage"
          to={{
            search:
              's?address=San%20Fransisco&bounds=-122.517910874663%2C37.6044780500533%2C-122.354995082683%2C37.8324430069081',
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
