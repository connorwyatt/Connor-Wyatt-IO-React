import {ComponentClass} from 'react';
import {IFieldComponentProps} from './';

export interface IFieldComponentConfig<T> {
  fieldName: string;

  componentType: ComponentClass<IFieldComponentProps<T>>;
}
