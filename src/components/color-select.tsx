import { Color, COLORS } from '@workbench/enums/colors';

interface ColorSelectProps {
  initialValue: string;
  setColor: (c: string) => void;
}

export function ColorSelect({ initialValue, setColor }: ColorSelectProps) {
  return (
    <select
      value={initialValue}
      onChange={(event) => setColor(event.target.value)}
    >
      {COLORS.map((color: Color) => (
        <option value={color.id}>{color.name}</option>
      ))}
    </select>
  );
}
