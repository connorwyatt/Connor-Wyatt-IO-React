import {Observable} from 'rxjs/Observable';
import {Nullable} from './Nullable';

export interface IFormControl<T> {
  readonly value: T;

  readonly isValid: boolean;

  readonly errors: Nullable<{ [key: string]: any }>;

  readonly valueChange: Observable<Nullable<T>>;

  setValue(value: T): void;
}
