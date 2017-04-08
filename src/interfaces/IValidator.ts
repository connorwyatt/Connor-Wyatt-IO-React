import {IFieldControl} from './';

export interface IValidator {
  name: string;

  validate(control: IFieldControl<any>): Nullable<any>;
}
