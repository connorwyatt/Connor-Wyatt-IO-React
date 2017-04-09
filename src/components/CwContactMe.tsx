import firebase from 'firebase';
import React, {Component, FormEvent, ReactElement} from 'react';
import {FieldControl, FormControl, MaxLengthValidator, PatternValidator, RequiredValidator} from '../forms';
import {IFieldComponentConfig, IFormControl} from '../interfaces';
import './CwContactMe.scss';
import {CwForm} from './CwForm';
import {CwInputText} from './CwInputText';
import {CwInputTextarea} from './CwInputTextarea';
import {Subscription} from 'rxjs/Subscription';

interface IState {
  form: IFormControl;

  fieldComponentConfig: Array<IFieldComponentConfig<any>>;

  isSubmitted: boolean;
}

export class CwContactMe extends Component<void, IState> {
  private formSubscription: Subscription;

  public constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);

    const form = FormControl.create({
      name: FieldControl.create<string>('Name', '', [RequiredValidator.create(), MaxLengthValidator.create(50)]),
      email: FieldControl.create<string>('Email', '', [
        RequiredValidator.create(),
        MaxLengthValidator.create(100),
        PatternValidator.create(/.+@.+\..+/, () => 'The value is not a valid email address.')
      ]),
      message: FieldControl.create<string>('Message', '', [RequiredValidator.create(), MaxLengthValidator.create(5000)])
    });

    this.formSubscription = form.valueChange.subscribe(() => this.forceUpdate());

    const fieldComponentConfig = [
      {fieldName: 'name', componentType: CwInputText},
      {fieldName: 'email', componentType: CwInputText},
      {fieldName: 'message', componentType: CwInputTextarea}
    ];

    this.state = {form, fieldComponentConfig, isSubmitted: false};
  }

  public render(): ReactElement<HTMLDivElement> {
    let formContent: ReactElement<HTMLElement>;

    if (!this.state.isSubmitted) {
      formContent = <CwForm name="contactMe"
                            form={this.state.form}
                            fieldComponentConfig={this.state.fieldComponentConfig}
                            onSubmit={this.handleSubmit}/>;
    } else {
      formContent = <div>
        <h2>Thank You</h2>
        <p>Thank you for contacting me, I will get back to you as soon as possible.</p>
      </div>;
    }

    return <div className="cw-contact-me">
      <div className="cw-contact-me--grid">
        <div className="cw-contact-me--form-grid-item">
          <div className="cw-contact-me--form-panel">
            {formContent}
          </div>
        </div>

        <div className="cw-contact-me--explanation-grid-item">
          <div className="cw-contact-me--explanation-panel">
            <p className="cw-contact-me--explanation-panel-text">
              By giving me your contact details I can get back to you at my earliest convenience.
            </p>
            <p className="cw-contact-me--explanation-panel-text">
              Please feel free to contact me with regards to any programming questions, open-source projects or
              freelance work.
            </p>
          </div>
        </div>
      </div>
    </div>;
  }

  public componentWillUnmount(): void {
    this.formSubscription.unsubscribe();
  }

  private handleSubmit(event: FormEvent<HTMLFormElement>): void {
    const form = this.state.form;

    if (!form.isValid) {
      return;
    }

    firebase.database().ref('rawMessages')
      .push(form.value)
      .then(() => {
        this.setState({
          isSubmitted: true
        });
      });

    console.log(form);
  }
}
