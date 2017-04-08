import React, {StatelessComponent} from 'react';
import {IFieldComponentConfig, IFormControl} from '../interfaces';

interface IProps {
  name: string;
  form: IFormControl;
  fieldComponentConfig: Array<IFieldComponentConfig<any>>;
}

export const CwForm: StatelessComponent<IProps> = props => {
  const formControls = props.fieldComponentConfig.map(config => {
    const {fieldName, componentType} = config;
    const control = props.form.controls[fieldName];

    return React.createElement(componentType, {key: fieldName, id: fieldName, fieldControl: control});
  });

  return <form name={props.name} noValidate={true}>
    {formControls}
  </form>;
};
