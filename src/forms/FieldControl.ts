import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {IFieldControl, IValidationError, IValidator} from '../interfaces';

export class FieldControl<T> implements IFieldControl<Nullable<T>> {
  public static create<T>(label: Nullable<string>, value?: Nullable<T>, validators?: Array<IValidator>): FieldControl<T> {
    return new this<T>(label, value, validators);
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
    if (this._errors === null) {
      return true;
    }

    return !(Object.keys(this._errors).length > 0);
  };

  public get isDirty(): boolean {
    return this._isDirty;
  }

  public get isTouched(): boolean {
    return this._isTouched;
  }

  public get errors(): Nullable<Dictionary<IValidationError<any>>> {
    return this._errors;
  };

  private _label: Nullable<string> = null;
  private _value: Nullable<T> = null;
  private _valueChange: Subject<Nullable<T>> = new Subject<Nullable<T>>();
  private _errors: Nullable<Dictionary<IValidationError<any>>> = null;
  private _isDirty: boolean = false;
  private _isTouched: boolean = false;
  private _validators: Array<IValidator>;

  private constructor(label: Nullable<string>, value: Nullable<T> = null, validators: Array<IValidator> = []) {
    this._label = label;
    this._value = value;
    this._validators = validators;

    this._errors = this.validate();
  }

  public setValue(value: Nullable<T>): void {
    this._isDirty = true;

    this._value = value;

    this._errors = this.validate();

    this._valueChange.next(this._value);
  }

  public setTouched(): void {
    this._isTouched = true;
  }

  private validate(): Nullable<Dictionary<any>> {
    const errors = this._validators.reduce((accumulatedErrors, validator) => {
      const partialErrors = validator.validate(this);

      if (partialErrors === null) {
        return accumulatedErrors;
      }

      return Object.assign({}, accumulatedErrors, {
        [validator.name]: partialErrors
      });
    }, {});

    return Object.keys(errors).length > 0 ? errors : null;
  }
}
