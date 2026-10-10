interface KeyColor {
  name: string;
  id: string;
}

export const COLORS = [
  { name: 'Red', id: 'red' },
  { name: 'Green', id: 'green' },
  { name: 'Blue', id: 'blue' },
  { name: 'Black', id: 'black' },
  { name: 'White', id: 'white' },
  { name: 'Yellow', id: 'yellow' },
  { name: 'Purple', id: 'purple' },
  { name: 'Pink', id: 'pink' },
  { name: 'Dark Blue', id: 'darkblue' },
  { name: 'Dark Green', id: 'darkgreen' },
  { name: 'Orange', id: 'orange' },
  { name: 'Cyan', id: 'cyan' },
  { name: 'Magenta', id: 'magenta' },
] as const satisfies readonly KeyColor[];

export type Color = (typeof COLORS)[number];

export function fromStringToColor(colorId: string): Color {
  for (const v of COLORS) {
    if (colorId === v.id) {
      return v;
    }
  }
  return { name: 'Black', id: 'black' };
}
