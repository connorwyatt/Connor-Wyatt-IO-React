import {IFieldControl, IValidationError, IValidator} from '../interfaces';
import {ValidationError} from './';

export class RequiredValidator implements IValidator {
  public static create(): RequiredValidator {
    return new RequiredValidator();
  }

  public name: string = 'required';

  private constructor() {
  }

  public validate(control: IFieldControl<any>): Nullable<IValidationError<boolean>> {
    const {value} = control;

    if (value === null || value === '') {
      return new ValidationError(true);
    }

    return null;
  }
}
