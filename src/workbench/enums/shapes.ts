//

export const ALL_POINT_SHAPES = [
  'Square',
  'Circle',
  'Round edges',
  'Triangle mesh',
] as const;

export type PointShape = (typeof ALL_POINT_SHAPES)[number];

//

export const ALL_ALIGNMENT_SHAPES = [
  'Square',
  'Circle',
  'Round edge',
  'Triangle mesh',
] as const;

export type AlignmentShape = (typeof ALL_ALIGNMENT_SHAPES)[number];

//

export const ALL_IMAGE_BACKGROUND_SHAPES = [
  'None',
  'Square',
  'Circle',
] as const;

export type ImageBackgroundShape = (typeof ALL_IMAGE_BACKGROUND_SHAPES)[number];
