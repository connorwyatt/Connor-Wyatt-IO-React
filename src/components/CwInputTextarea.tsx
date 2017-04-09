import React, {ChangeEvent, Component} from 'react';
import {IFieldComponentProps} from '../interfaces';
import {ClassHelper} from '../utilities/ClassHelper';
import {CwErrorMessages} from './CwErrorMessages';
import './CwInputTextarea.scss';

interface IProps extends IFieldComponentProps<string> {
}

interface IState {
  errorMessageStrings: Dictionary<string>;
}

export class CwInputTextarea extends Component<IProps, IState> {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  public render() {
    const {props} = this;

    const isInvalid = props.fieldControl.isDirty && !props.fieldControl.isValid;

    const errorMessages = isInvalid ? <span className="cw-input-textarea--messages">
        <CwErrorMessages errorMessages={props.fieldControl.errors}/>
      </span> : null;

    return <div className={ClassHelper.parse(['cw-input-textarea', {
      'cw-input-textarea__invalid': isInvalid
    }])}>
      <textarea className={ClassHelper.parse(['cw-input-textarea--input', {
        'cw-input-textarea--input__not-empty': !props.fieldControl.isEmpty
      }])}
             id={props.id}
             type="text"
             value={props.fieldControl.value}
             onChange={this.handleChange}
             onFocus={this.handleFocus}/>

      <label className="cw-input-textarea--label"
             htmlFor={props.id}>
        {props.fieldControl.label}
      </label>

      {errorMessages}
    </div>;
  }

  private handleChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    this.props.fieldControl.setValue(event.target.value);
  }

  private handleFocus(): void {
    this.props.fieldControl.setTouched();
  }
}
