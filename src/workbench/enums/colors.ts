export const COLORS = [
  'Red',
  'Green',
  'Blue',
  'Black',
  'White',
  'Yellow',
  'Purple',
  'Pink',
  'Dark blue',
  'Dark green',
  'Orange',
  'Cyan',
  'Magenta',
] as const;

export type Color = (typeof COLORS)[number];
