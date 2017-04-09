import React, {ChangeEvent, Component} from 'react';
import {IFieldComponentProps} from '../interfaces';
import {ClassHelper} from '../utilities/ClassHelper';
import {CwErrorMessages} from './CwErrorMessages';
import './CwInputText.scss';

interface IProps extends IFieldComponentProps<string> {
}

interface IState {
  errorMessageStrings: Dictionary<string>;
}

export class CwInputText extends Component<IProps, IState> {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  public render() {
    const {props} = this;

    const isInvalid = props.fieldControl.isDirty && !props.fieldControl.isValid;

    const errorMessages = isInvalid ? <span className="cw-input-text--messages">
        <CwErrorMessages errors={props.fieldControl.errors}/>
      </span> : null;

    return <div className={ClassHelper.parse(['cw-input-text', {
      'cw-input-text__invalid': isInvalid
    }])}>
      <input className={ClassHelper.parse(['cw-input-text--input', {
        'cw-input-text--input__not-empty': !props.fieldControl.isEmpty
      }])}
             id={props.id}
             type="text"
             value={props.fieldControl.value}
             onChange={this.handleChange}
             onFocus={this.handleFocus}/>

      <label className="cw-input-text--label"
             htmlFor={props.id}>
        {props.fieldControl.label}
      </label>

      {errorMessages}
    </div>;
  }

  private handleChange(event: ChangeEvent<HTMLInputElement>): void {
    this.props.fieldControl.setValue(event.target.value);
  }

  private handleFocus(): void {
    this.props.fieldControl.setTouched();
  }
}
