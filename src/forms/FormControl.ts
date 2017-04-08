import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {IFormControl} from '../interfaces/IFormControl';
import {Nullable} from '../interfaces/Nullable';

export class FormControl<T> implements IFormControl<Nullable<T>> {
  public static create<T>(value: Nullable<T>): FormControl<T> {
    return new this<T>(value);
  }

  public get value(): Nullable<T> {
    return this._value;
  }

  public get valueChange(): Observable<T> {
    return this._valueChange.asObservable();
  };

  public get isValid(): boolean {
    return true;
  };

  public get errors(): Nullable<{ [key: string]: any; }> {
    return null;
  };

  private _value: Nullable<T>;
  private _valueChange: Subject<Nullable<T>> = new Subject<Nullable<T>>();

  private constructor(value: Nullable<T> = null) {
    this._value = value;
  }

  public setValue(value: Nullable<T>): void {
    this._value = value;
    this._valueChange.next(this._value);
  }
}
