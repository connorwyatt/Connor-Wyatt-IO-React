import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {IFieldControl} from '../interfaces';

export class FieldControl<T> implements IFieldControl<Nullable<T>> {
  public static create<T>(label: Nullable<string>, value: Nullable<T>): FieldControl<T> {
    return new this<T>(label, value);
  }

  public get value(): Nullable<T> {
    return this._value;
  }

  public get valueChange(): Observable<T> {
    return this._valueChange.asObservable();
  };

  public get label(): Nullable<string> {
    return this._label;
  }

  public get isEmpty(): boolean {
    return !this._value;
  }

  public get isValid(): boolean {
    return true;
  };

  public get errors(): Nullable<Dictionary<any>> {
    return null;
  };

  private _label: Nullable<string>;
  private _value: Nullable<T>;
  private _valueChange: Subject<Nullable<T>> = new Subject<Nullable<T>>();

  private constructor(label: Nullable<string>, value: Nullable<T> = null) {
    this._label = label;
    this._value = value;
  }

  public setValue(value: Nullable<T>): void {
    this._value = value;
    this._valueChange.next(this._value);
  }
}
