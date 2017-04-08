import {IFieldControl} from './';

export interface IFieldComponentProps<T> {
  id: string;

  fieldControl: IFieldControl<T>;
}
