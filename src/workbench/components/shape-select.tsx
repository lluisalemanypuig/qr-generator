interface ShapeSelectProps<
  T,
> extends React.SelectHTMLAttributes<HTMLSelectElement> {
  allValues: readonly string[];
  setShape: (c: T) => void;
}

function fromStringToShape<T>(shape: string, values: readonly string[]): T {
  for (const v of values) {
    if (shape === v) {
      return shape as T;
    }
  }
  return 'Square' as T;
}

export function ShapeSelect<T>({
  allValues,
  setShape,
  ...selectProps
}: ShapeSelectProps<T>) {
  return (
    <select
      {...selectProps}
      onChange={(event) =>
        setShape(fromStringToShape<T>(event.target.value, allValues))
      }
    >
      {allValues.map((shape: string) => (
        <option key={shape} value={shape}>
          {shape}
        </option>
      ))}
    </select>
  );
}
