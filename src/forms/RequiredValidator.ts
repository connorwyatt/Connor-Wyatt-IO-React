import {IFieldControl, IValidator} from '../interfaces';

export class RequiredValidator implements IValidator {
  public static create(): RequiredValidator {
    return new RequiredValidator();
  }

  public name: string = 'required';

  private constructor() {}

  public validate(control: IFieldControl<any>): Nullable<any> {
    const {value} = control;

    if (value === null || value === '') {
      return true;
    }

    return null;
  }
}
