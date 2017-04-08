import {Observable} from 'rxjs/Observable';

export interface IBaseControl<T> {
  readonly value: T;

  readonly isValid: boolean;

  readonly errors: Nullable<Dictionary<any>>;

  readonly valueChange: Observable<Nullable<T>>;

  setValue(value: T): void;
}
