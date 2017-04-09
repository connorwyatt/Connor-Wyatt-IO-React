import {Observable} from 'rxjs/Observable';
import {IValidationError} from './';

export interface IBaseControl<T> {
  readonly value: T;

  readonly isValid: boolean;

  readonly isDirty: boolean;

  readonly isTouched: boolean;

  readonly errors: Nullable<Dictionary<IValidationError<any>>>;

  readonly valueChange: Observable<Nullable<T>>;

  setValue(value: Nullable<T>): void;
}
