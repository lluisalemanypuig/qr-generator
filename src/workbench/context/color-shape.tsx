import { Color } from '@workbench/enums/colors';
import { AlignmentShape, PointShape } from '@workbench/enums/shapes';
import { useState } from 'react';

export interface QRColorAndShapeOptions {
  fillColor: Color;
  borderColor: Color;
  pointShape: PointShape;
  alignmentShape: AlignmentShape;
  transparentBackground: boolean;
}

export function QRColorAndShapeOptionsState() {
  const [options, setOptions] = useState<QRColorAndShapeOptions>({
    fillColor: 'Black',
    borderColor: 'Black',
    pointShape: 'Square',
    alignmentShape: 'Square',
    transparentBackground: false,
  });

  const setFillColor = (fillColor: Color) => {
    setOptions((previous) => ({
      ...previous,
      fillColor,
    }));
  };

  const setBorderColor = (borderColor: Color) => {
    setOptions((previous) => ({
      ...previous,
      borderColor,
    }));
  };

  const setPointShape = (pointShape: PointShape) => {
    setOptions((previous) => ({
      ...previous,
      pointShape,
    }));
  };

  const setAlignmentShape = (alignmentShape: AlignmentShape) => {
    setOptions((previous) => ({
      ...previous,
      alignmentShape,
    }));
  };

  const setTransparentBackground = (transparentBackground: boolean) => {
    setOptions((previous) => ({
      ...previous,
      transparentBackground,
    }));
  };

  return {
    options,
    setFillColor,
    setBorderColor,
    setPointShape,
    setAlignmentShape,
    setTransparentBackground,
  };
}
