import {IFieldControl, IPatternValidatorError, IValidator} from '../interfaces';
import {ValidationError} from './';

export class PatternValidator implements IValidator {
  public static create(pattern: RegExp, customMessageHandler: (error: IPatternValidatorError) => string): PatternValidator {
    return new PatternValidator(pattern, customMessageHandler);
  }

  public name: string = 'pattern';

  private pattern: RegExp;
  private customMessageHandler?: (error: IPatternValidatorError) => string;

  private constructor(pattern: RegExp, customMessageHandler: (error: IPatternValidatorError) => string) {
    this.pattern = pattern;
    this.customMessageHandler = customMessageHandler;
  }

  public validate(control: IFieldControl<any>): Nullable<ValidationError<IPatternValidatorError>> {
    const {value} = control;

    if (value === null || value === '') {
      return null;
    }

    if (this.pattern.test(value)) {
      return null;
    }

    return new ValidationError({
      pattern: this.pattern
    }, this.customMessageHandler);
  }
}
