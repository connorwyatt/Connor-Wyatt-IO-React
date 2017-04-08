import React, {PropTypes, StatelessComponent} from 'react';
import {IForm, IFormControlConfig} from '../interfaces';

interface IProps {
  name: string;
  form: IForm;
  formControlConfig: Array<IFormControlConfig<any>>;
}

export const CwForm: StatelessComponent<IProps> = props => {
  const formControls = props.formControlConfig.map(config => {
    const control = props.form.controls[config.fieldName];

    return React.createElement(config.componentType, {key: config.fieldName, formControl: control});
  });

  return <form name={props.name} noValidate={true}>
    {formControls}
  </form>;
};
