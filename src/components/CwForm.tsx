import React, {StatelessComponent, FormEvent} from 'react';
import {IFieldComponentConfig, IFormControl} from '../interfaces';
import './CwForm.scss';

interface IProps {
  name: string;
  form: IFormControl;
  fieldComponentConfig: Array<IFieldComponentConfig<any>>;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export const CwForm: StatelessComponent<IProps> = props => {
  const formControls = props.fieldComponentConfig.map(config => {
    const {fieldName, componentType} = config;
    const control = props.form.controls[fieldName];

    return React.createElement(componentType, {key: fieldName, id: fieldName, fieldControl: control});
  });

  return <form name={props.name} onSubmit={e => handleSubmit(e, props)} noValidate={true}>
    {formControls}

    <div className="cw-form--form-buttons">
      <button className="cw-form--form-button"
              disabled={!props.form.isDirty && !props.form.isValid}
              type="submit">Submit
      </button>
    </div>
  </form>;
};

const handleSubmit = (event: FormEvent<HTMLFormElement>, props: IProps) => {
  event.preventDefault();

  if (props.onSubmit) {
    props.onSubmit(event);
  }
};
