export enum Choices {
  none,
  some,
}

export interface None {
  option: Choices.none;
}

export interface Some<T> {
  option: Choices.some;
  value: T;
}

export type Option<S> = None | Some<S>;

export const isNone = <T>(val: Option<T>): val is None => {
  return (val as None).option === Choices.none;
};

export const isSome = <T>(val: Option<T>): val is Some<T> => {
  return (val as Some<T>).option === Choices.some;
};

export const none = (): None => {
  return { option: Choices.none };
};

export const some = <S>(val: S): Some<S> => {
  return { option: Choices.some, value: val };
};
