import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import {Observable} from 'rxjs/Observable';
import {IForm} from '../interfaces/IForm';
import {IFormControl} from '../interfaces/IFormControl';
import {Nullable} from '../interfaces/Nullable';

export class Form implements IForm {
  public static create(controls: { [key: string]: IFormControl<any> }): Form {
    return new Form(controls);
  }

  public get value(): { [key: string]: any } {
    return Object.keys(this._controls).reduce((accumulatedValue, key) => {
      return Object.assign(
        {},
        accumulatedValue,
        {[key]: this._controls[key].value}
      );
    }, {});
  };

  public get valueChange(): Observable<{ [key: string]: any }> {
    return this._valueChange;
  };

  public get controls(): { [key: string]: IFormControl<any> } {
    return this._controls;
  }

  public get isValid(): boolean {
    return true;
  };

  public get errors(): Nullable<{ [key: string]: any; }> {
    return null;
  };

  private _valueChange: Observable<any>;
  private _controls: { [key: string]: IFormControl<any> };

  private constructor(controls: { [key: string]: IFormControl<any> } = {}) {
    this._controls = controls;

    this._valueChange = this.getValueChangeObservable(controls);
  }

  public setValue(value: { [key: string]: any }): void {
    const valueKeys = Object.keys(value);

    valueKeys.forEach(key => {
      const control = this._controls[key];

      if (control) {
        control.setValue(value[key]);
      }
    });
  }

  private getValueChangeObservable(controls: { [key: string]: IFormControl<any> }): Observable<{ [key: string]: any }> {
    const fieldNames = Object.keys(controls);

    const fieldObservables = fieldNames.map(fieldName => {
      const control = controls[fieldName];

      return control.valueChange;
    });

    return Observable.merge(...fieldObservables).map(() => this.value).share();
  }
}
