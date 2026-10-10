import { Color } from '@workbench/enums/colors';
import { ImageBackgroundShape } from '@workbench/enums/shapes';

export interface ImageControl {
  componentsDisabled: boolean;
  backgroundComponentsDisabled: boolean;
  image: string | undefined;
  backgroundShape: ImageBackgroundShape;
}

export interface ImageOptions {
  // a percentage of the original image's size
  imageSize: number;
  backgroundColor: Color;
  backgroundBorderColor: Color;
  backgroundSize: number;
}
