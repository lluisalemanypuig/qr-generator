import { Color } from '@workbench/enums/colors';
import { ImageBackgroundShape } from '@workbench/enums/shapes';

export interface ImageOptions {
  componentsDisabled: boolean;
  backgroundComponentsDisabled: boolean;
  image: string | undefined; // this is not a string
  imageSize: number; // a percentage of the original image
  backgroundShape: ImageBackgroundShape;
  backgroundColor: Color;
  backgroundBorderColor: Color;
  backgroundSize: number;
}
