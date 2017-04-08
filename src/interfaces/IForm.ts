import {IFormControl} from './IFormControl';

export interface IForm extends IFormControl<any> {
  readonly controls: { [key: string]: IFormControl<any> };
}
