export interface IValidationError<T> {
  readonly error: T;

  getCustomMessage(): Nullable<string>;
}
