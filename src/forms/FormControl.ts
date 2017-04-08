import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import {Observable} from 'rxjs/Observable';
import {IFieldControl, IFormControl} from '../interfaces';

export class FormControl implements IFormControl {
  public static create(controls: Dictionary<IFieldControl<any>>): FormControl {
    return new FormControl(controls);
  }

  public get value(): Dictionary<any> {
    return Object.keys(this._controls).reduce((accumulatedValue, key) => {
      return Object.assign(
        {},
        accumulatedValue,
        {[key]: this._controls[key].value}
      );
    }, {});
  };

  public get valueChange(): Observable<Dictionary<any>> {
    return this._valueChange;
  };

  public get controls(): Dictionary<IFieldControl<any>> {
    return this._controls;
  }

  public get isValid(): boolean {
    if (this.errors === null) {
      return true;
    }

    return !(Object.keys(this.errors).length > 0);
  };

  public get errors(): Nullable<Dictionary<any>> {
    const errors =  Object.keys(this._controls).reduce((accumulatedErrors, key) => {
      let controlErrors = this._controls[key].errors;

      if (controlErrors === null) {
        return accumulatedErrors;
      }

      return Object.assign({}, accumulatedErrors, {
        [key]: controlErrors
      });
    }, {});

    return Object.keys(errors).length > 0 ? errors : null;
  };

  private _valueChange: Observable<any>;
  private _controls: Dictionary<IFieldControl<any>>;

  private constructor(controls: Dictionary<IFieldControl<any>> = {}) {
    this._controls = controls;

    this._valueChange = this.getValueChangeObservable(controls);
  }

  public setValue(value: Dictionary<any>): void {
    const valueKeys = Object.keys(value);

    valueKeys.forEach(key => {
      const control = this._controls[key];

      if (control) {
        control.setValue(value[key]);
      }
    });
  }

  private getValueChangeObservable(controls: Dictionary<IFieldControl<any>>): Observable<Dictionary<any>> {
    const fieldNames = Object.keys(controls);

    const fieldObservables = fieldNames.map(fieldName => {
      const control = controls[fieldName];

      return control.valueChange;
    });

    return Observable.merge(...fieldObservables).map(() => this.value).share();
  }
}
