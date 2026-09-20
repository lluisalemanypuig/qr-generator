import { Color, COLORS } from '@workbench/enums/colors';

interface ColorSelectProps {
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

export function ColorSelect({ initialValue, setColor }: ColorSelectProps) {
  return (
    <select
      value={initialValue}
      onChange={(event) => setColor(fromStringToColor(event.target.value))}
    >
      {COLORS.map((color: Color) => (
        <option value={color}>{color}</option>
      ))}
    </select>
  );
}
