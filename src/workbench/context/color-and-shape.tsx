import { AlignmentShape, PointShape } from '@workbench/enums/shapes';
import { useState } from 'react';

export interface QRColorAndShapeOptions {
  fillColor: string;
  borderColor: string;
  pointShape: PointShape;
  alignmentShape: AlignmentShape;
}

export function QRColorAndShapeOptionsState() {
  const [options, setOptions] = useState<QRColorAndShapeOptions>({
    fillColor: 'black',
    borderColor: 'black',
    pointShape: 'SQUARES',
    alignmentShape: 'SQUARES',
  });

  const setFillColor = (fillColor: string) => {
    setOptions((previous) => ({
      ...previous,
      fillColor,
    }));
  };

  const setBorderColor = (borderColor: string) => {
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

  return {
    options,
    setFillColor,
    setBorderColor,
    setPointShape,
    setAlignmentShape,
  };
}
