import {IBaseControl} from './';

export interface IFieldControl<T> extends IBaseControl<T> {
  readonly label: Nullable<string>;

  readonly isEmpty: boolean;

  setTouched(): void;
}
