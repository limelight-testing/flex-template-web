import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './ValidationError.css';

/**
 * This component can be used to show validation errors next to form
 * input fields. The component takes the final-form Field component
 * `meta` object as a prop and infers if an error message should be
 * shown.
 */
const ValidationError = props => {
  const { rootClassName, className, fieldMeta, validatingMessage } = props;
  const { touched, error, validating } = fieldMeta;
  const classes = classNames(rootClassName || css.root, className);
  const getMessage = message => <div className={classes}>{message}</div>;

  return touched && validating
    ? getMessage(validatingMessage)
    : touched && error
    ? getMessage(error)
    : null;
};

ValidationError.defaultProps = { rootClassName: null, className: null };

const { shape, bool, string } = PropTypes;

ValidationError.propTypes = {
  rootClassName: string,
  className: string,
  validatingMessage: string,
  fieldMeta: shape({
    touched: bool.isRequired,
    error: string,
    validating: bool,
  }).isRequired,
};

export default ValidationError;
