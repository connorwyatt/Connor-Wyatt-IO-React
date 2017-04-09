import {IFieldControl, IValidationError} from './';

export interface IValidator {
  name: string;

  validate(control: IFieldControl<any>): Nullable<IValidationError<any>>;
}
