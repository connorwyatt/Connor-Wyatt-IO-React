import React, {StatelessComponent} from 'react';
import {IValidationError} from '../interfaces';
import './CwErrorMessages.scss';

interface IProps {
  errors: Nullable<Dictionary<IValidationError<any>>>;
}

const strings: Dictionary<string> = {
  required: 'This field is a required field.',
  maxLength: 'The value is longer than the maximum allowed length for this field.'
};

export const CwErrorMessages: StatelessComponent<IProps> = props => {
  const errorMessages = Object.keys(props.errors || {}).map(key => {
    const errorMessage = (props.errors || {})[key];

    return <li className="cw-error-messages--message" key={key}>{getErrorMessage(key, errorMessage)}</li>;
  });

  return <ul>
    {errorMessages}
  </ul>;
};

const getErrorMessage = (key: string, error: IValidationError<any>): string => {
  let customMessage = error.getCustomMessage();

  if (customMessage !== null) {
    return customMessage;
  }

  return strings[key] || '';
};
