import React, {ChangeEvent, Component} from 'react';
import {IFieldComponentProps} from '../interfaces';
import {ClassHelper} from '../utilities/ClassHelper';
import './CwInputText.scss';

interface IProps extends IFieldComponentProps<string> {
}

export class CwInputText extends Component<IProps, void> {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  public render() {
    return <div className="cw-input-text">
      <input className={ClassHelper.parse(['cw-input-text--input', {
        'cw-input-text--input__not-empty': !this.props.fieldControl.isEmpty
      }])}
             id={this.props.id}
             type="text"
             value={this.props.fieldControl.value}
             onChange={this.handleChange}/>

      <label className="cw-input-text--label"
             htmlFor={this.props.id}>
        {this.props.fieldControl.label}
      </label>
    </div>;
  }

  private handleChange(event: ChangeEvent<HTMLInputElement>): void {
    this.props.fieldControl.setValue(event.target.value);
  }
}
