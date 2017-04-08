import React, {StatelessComponent} from 'react';
import './CwErrorMessages.scss';

interface IProps {
  errorMessages: Nullable<Dictionary<any>>;
}

const strings: Dictionary<string> = {
  required: 'This field is a required field.',
  maxLength: 'The value is longer than the maximum allowed length for this field.'
};

export const CwErrorMessages: StatelessComponent<IProps> = props => {
  const errorMessages = Object.keys(props.errorMessages || {}).map(key => {
    return <li className="cw-error-messages--message" key={key}>{strings[key]}</li>;
  });

  return <ul>
    {errorMessages}
  </ul>;
};
