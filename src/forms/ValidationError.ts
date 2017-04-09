import {IValidationError} from '../interfaces';

export class ValidationError<T> implements IValidationError<T> {
  public get error(): T {
    return this._error;
  }

  private _error: T;
  private _customMessageHandler: Nullable<(error: T) => string>;

  constructor(error: T, customMessageHandler: Nullable<(error: T) => string> = null) {
    this._error = error;
    this._customMessageHandler = customMessageHandler;
  }

  public getCustomMessage(): Nullable<string> {
    if (this._customMessageHandler === null) {
      return null;
    }

    return this._customMessageHandler(this._error);
  }
}
