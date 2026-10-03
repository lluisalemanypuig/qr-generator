import { Color } from '@workbench/enums/colors';
import { AlignmentShape, PointShape } from '@workbench/enums/shapes';

export interface ColorAndShapeOptions {
  fillColor: Color;
  borderColor: Color;
  pointShape: PointShape;
  alignmentShape: AlignmentShape;
  transparentBackground: boolean;
}
