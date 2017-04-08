import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {IFieldControl} from '../interfaces';

export class FieldControl<T> implements IFieldControl<Nullable<T>> {
  public static create<T>(value: Nullable<T>): FieldControl<T> {
    return new this<T>(value);
  }

  public get value(): Nullable<T> {
    return this._value;
  }

  public get valueChange(): Observable<T> {
    return this._valueChange.asObservable();
  };

  public get label(): string {
    return 'Label';
  }

  public get isValid(): boolean {
    return true;
  };

  public get errors(): Nullable<Dictionary<any>> {
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
