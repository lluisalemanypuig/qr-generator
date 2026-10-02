import { isNotDefined } from '@utils/defined';
import { Color } from '@workbench/enums/colors';
import { AlignmentShape, PointShape } from '@workbench/enums/shapes';
import { createContext, ReactNode, useContext, useState } from 'react';

interface ColorAndShapeOptions {
  fillColor: Color;
  borderColor: Color;
  pointShape: PointShape;
  alignmentShape: AlignmentShape;
  transparentBackground: boolean;
}

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
