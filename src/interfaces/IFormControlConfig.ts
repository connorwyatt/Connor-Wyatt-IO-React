import {ComponentClass} from 'react';
import {IFormControlProps} from './IFormControlProps';

export interface IFormControlConfig<T> {
  fieldName: string;

  componentType: ComponentClass<IFormControlProps<T>>;
}
