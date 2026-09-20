interface ShapeSelectProps<T> {
  initialValue: string;
  allValues: readonly string[];
  setShape: (c: T) => void;
}

function fromStringToShape<T>(shape: string, values: readonly string[]): T {
  for (const v of values) {
    if (shape === v) {
      return shape as T;
    }
  }
  return 'Sqaure' as T;
}

export function ShapeSelect<T>({
  initialValue,
  allValues,
  setShape,
}: ShapeSelectProps<T>) {
  return (
    <select
      value={initialValue}
      onChange={(event) =>
        setShape(fromStringToShape<T>(event.target.value, allValues))
      }
    >
      {allValues.map((shape: string) => (
        <option value={shape}>{shape}</option>
      ))}
    </select>
  );
}
