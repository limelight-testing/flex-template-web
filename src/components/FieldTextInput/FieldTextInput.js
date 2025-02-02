import React, { Component } from 'react';
import { bool, func, object, shape, string } from 'prop-types';
import { Field } from 'react-final-form';
import classNames from 'classnames';
import { ValidationError, ExpandingTextarea } from '../../components';

import css from './FieldTextInput.css';

const CONTENT_MAX_LENGTH = 5000;

class FieldTextInputComponent extends Component {
  render() {
    /* eslint-disable no-unused-vars */
    const {
      rootClassName,
      className,
      inputRootClass,
      customErrorText,
      id,
      label,
      type,
      input,
      meta,
      validating,
      validatingMessage,
      onUnmount,
      ...rest
    } = this.props;
    /* eslint-enable no-unused-vars */

    if (label && !id) {
      throw new Error('id required when a label is given');
    }

    const { valid, invalid, touched, error } = meta;
    const isTextarea = type === 'textarea';

    const errorText = customErrorText || error;

    // Error message and input error styles are only shown if the
    // field has been touched and the validation has failed.
    const hasError = !!customErrorText || !!(touched && invalid && error);

    const fieldMeta = { touched: hasError, error: errorText, validating };

    const inputClasses =
      inputRootClass ||
      classNames(css.input, {
        [css.inputSuccess]: valid,
        [css.inputError]: hasError,
        [css.textarea]: isTextarea,
      });
    const inputProps = isTextarea
      ? { className: inputClasses, id, rows: 1, maxLength: CONTENT_MAX_LENGTH, ...input, ...rest }
      : { className: inputClasses, id, type, ...input, ...rest };

    const classes = classNames(rootClassName || css.root, className);
    return (
      <div className={classes}>
        {label ? <label htmlFor={id}>{label}</label> : null}
        {isTextarea ? <ExpandingTextarea {...inputProps} /> : <input {...inputProps} />}
        <ValidationError validatingMessage={validatingMessage} fieldMeta={fieldMeta} />
      </div>
    );
  }
}

FieldTextInputComponent.defaultProps = {
  rootClassName: null,
  className: null,
  inputRootClass: null,
  onUnmount: null,
  customErrorText: null,
  id: null,
  label: null,
};

FieldTextInputComponent.propTypes = {
  rootClassName: string,
  className: string,
  inputRootClass: string,

  onUnmount: func,

  // Supplied by the wrapping Form because Final Form apparently
  // doesn't supply this to the Field as the docs claim
  validating: bool,

  // Needed for when Field is validating in an async manner
  validatingMessage: string,

  // Error message that can be manually passed to input field,
  // overrides default validation message
  customErrorText: string,

  // Label is optional, but if it is given, an id is also required so
  // the label can reference the input in the `for` attribute
  id: string,
  label: string,

  // Either 'textarea' or something that is passed to the input element
  type: string.isRequired,

  // Generated by final-form's Field component
  input: shape({
    onChange: func.isRequired,
  }).isRequired,
  meta: object.isRequired,
};

class FieldTextInput extends Component {
  componentWillUnmount() {
    // Unmounting happens too late if it is done inside Field component
    // (Then Form has already registered its (new) fields and
    // changing the value without corresponding field is prohibited in Final Form
    if (this.props.onUnmount) {
      this.props.onUnmount();
    }
  }

  render() {
    return <Field component={FieldTextInputComponent} {...this.props} />;
  }
}

export default FieldTextInput;
