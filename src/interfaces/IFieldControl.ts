import {IBaseControl} from './';

export interface IFieldControl<T> extends IBaseControl<T> {
  readonly label: string;

  readonly isEmpty: boolean;
}
