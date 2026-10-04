import { isNotDefined } from '@utils/defined';
import { Color } from '@workbench/enums/colors';
import { AlignmentShape, PointShape } from '@workbench/enums/shapes';
import { ColorAndShapeOptions } from '@workbench/options/color-shape';
import { createContext, ReactNode, useContext, useState } from 'react';
import { useGeneratorPipelineContext } from './generator-pipeline';

interface ColorAndShape {
  options: ColorAndShapeOptions;
  setFillColor: (color: Color) => void;
  setBorderColor: (color: Color) => void;
  setPointShape: (shape: PointShape) => void;
  setAlignmentShape: (shape: AlignmentShape) => void;
  setTransparentBackground: (transparent: boolean) => void;
}

const ColorAndShapeContext = createContext<ColorAndShape | null>(null);

export function ColorAndShapeProvider({ children }: { children: ReactNode }) {
  const {
    updateFillColor,
    updateBorderColor,
    updatePointShape,
    updateAlignmentShape,
    updateBackgroundTransparency,
  } = useGeneratorPipelineContext();

  const [options, setOptions] = useState<ColorAndShapeOptions>({
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
    updateFillColor(fillColor);
  };

  const setBorderColor = (borderColor: Color) => {
    setOptions((previous) => ({
      ...previous,
      borderColor,
    }));
    updateBorderColor(borderColor);
  };

  const setPointShape = (pointShape: PointShape) => {
    setOptions((previous) => ({
      ...previous,
      pointShape,
    }));
    updatePointShape(pointShape);
  };

  const setAlignmentShape = (alignmentShape: AlignmentShape) => {
    setOptions((previous) => ({
      ...previous,
      alignmentShape,
    }));
    updateAlignmentShape(alignmentShape);
  };

  const setTransparentBackground = (transparentBackground: boolean) => {
    setOptions((previous) => ({
      ...previous,
      transparentBackground,
    }));
    updateBackgroundTransparency(transparentBackground);
  };

  return (
    <ColorAndShapeContext.Provider
      value={{
        options,
        setFillColor,
        setBorderColor,
        setPointShape,
        setAlignmentShape,
        setTransparentBackground,
      }}
    >
      {children}
    </ColorAndShapeContext.Provider>
  );
}

export function useColorAndShapeContext() {
  const context = useContext(ColorAndShapeContext);

  if (isNotDefined(context)) {
    throw new Error(
      'useColorAndShapeContext must be used inside ColorAndShapeContext',
    );
  }

  return context;
}
