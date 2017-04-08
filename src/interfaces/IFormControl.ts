import {IBaseControl, IFieldControl} from './';

export interface IFormControl extends IBaseControl<any> {
  readonly controls: Dictionary<IFieldControl<any>>;
}
