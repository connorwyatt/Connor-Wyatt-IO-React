import {IFieldControl, IMaxLengthValidatorError, IValidationError, IValidator} from '../interfaces';
import {ValidationError} from './';

export class MaxLengthValidator implements IValidator {
  public static create(length: number): MaxLengthValidator {
    return new MaxLengthValidator(length);
  }

  public name: string = 'maxLength';

  private length: number;

  private constructor(length: number) {
    this.length = length;
  }

  public validate(control: IFieldControl<any>): Nullable<IValidationError<IMaxLengthValidatorError>> {
    const {value} = control;

    if (value === null || value.length <= this.length) {
      return null;
    }

    return new ValidationError({
      expectedLength: this.length,
      actualLength: value.length
    });
  }
}
