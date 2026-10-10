import { Color, COLORS, fromStringToColor } from '@workbench/enums/colors';

interface ColorSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  initialValue: Color;
  setColor: (c: Color) => void;
}

export function ColorSelect({
  initialValue,
  setColor,
  ...selectProps
}: ColorSelectProps) {
  return (
    <select
      {...selectProps}
      defaultValue={initialValue.id}
      onChange={(event) => setColor(fromStringToColor(event.target.value))}
    >
      {COLORS.map((color: Color) => (
        <option key={color.id} value={color.id}>
          {color.name}
        </option>
      ))}
    </select>
  );
}
