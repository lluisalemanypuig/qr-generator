export function isDefined<T>(x: T | null | undefined): x is NonNullable<T> {
  return x !== null && x !== undefined;
}

export function isNotDefined<T>(
  x: T | null | undefined,
): x is null | undefined {
  return !isDefined(x);
}
