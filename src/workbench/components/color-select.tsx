import { Color, COLORS } from '@workbench/enums/colors';

interface ColorSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  initialValue: Color;
  setColor: (c: Color) => void;
}

function fromStringToColor(color: string): Color {
  for (const v of COLORS) {
    if (color === v) {
      return color as Color;
    }
  }
  return 'Black';
}

export function ColorSelect({
  initialValue,
  setColor,
  ...selectProps
}: ColorSelectProps) {
  return (
    <select
      {...selectProps}
      value={initialValue}
      onChange={(event) => setColor(fromStringToColor(event.target.value))}
    >
      {COLORS.map((color: Color) => (
        <option key={color} value={color}>
          {color}
        </option>
      ))}
    </select>
  );
}
