interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  minimum?: number;
  initialValue?: number;
  maximum?: number;
  step?: number;
  setValue: (v: number) => void;
}

export function RangeSelect({
  minimum = 0,
  initialValue = 1,
  maximum = 2,
  step = 0.01,
  setValue,
  ...inputProps
}: Props) {
  if (initialValue < minimum) {
    initialValue = minimum;
  }
  if (initialValue > maximum) {
    initialValue = maximum;
  }

  return (
    <input
      {...inputProps}
      defaultValue={initialValue}
      min={minimum}
      max={maximum}
      step={step}
      onChange={(event) => setValue(Number(event.target.value))}
      type="range"
    />
  );
}
