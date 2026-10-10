interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  minimum?: number;
  defaultValue?: number;
  maximum?: number;
  step?: number;
  setValue: (v: number) => void;
}

export function RangeSelect({
  minimum = 0,
  defaultValue = 1,
  maximum = 2,
  step = 0.01,
  setValue,
  ...inputProps
}: Props) {
  if (defaultValue < minimum) {
    defaultValue = minimum;
  }
  if (defaultValue > maximum) {
    defaultValue = maximum;
  }

  return (
    <input
      {...inputProps}
      defaultValue={defaultValue}
      min={minimum}
      max={maximum}
      step={step}
      onChange={(event) => setValue(Number(event.target.value))}
      type="range"
    />
  );
}
