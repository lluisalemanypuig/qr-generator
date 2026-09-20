import { Color } from '@workbench/enums/colors';
import { ImageBackgroundShape } from '@workbench/enums/shapes';
import { useState } from 'react';

export interface QRImageOptions {
  image: string | undefined; // this is not a string
  imageSize: number; // a percentage of the original image
  backgroundShape: ImageBackgroundShape;
  backgroundColor: Color;
  backgroundBorderColor: Color;
  backgroundSize: number;
}

export function QRImageOptionsState() {
  const [options, setOptions] = useState<QRImageOptions>({
    image: undefined,
    imageSize: 1,
    backgroundShape: 'None',
    backgroundColor: 'White',
    backgroundBorderColor: 'Black',
    backgroundSize: 1,
  });

  const setImage = (image: string | undefined) => {
    setOptions((previous) => ({
      ...previous,
      image,
    }));
  };

  const setImageSize = (imageSize: number) => {
    setOptions((previous) => ({
      ...previous,
      imageSize,
    }));
  };

  const setBackgroundShape = (backgroundShape: ImageBackgroundShape) => {
    setOptions((previous) => ({
      ...previous,
      backgroundShape,
    }));
  };

  const setBackgroundColor = (backgroundColor: Color) => {
    setOptions((previous) => ({
      ...previous,
      backgroundColor,
    }));
  };

  const setBackgroundBorderColor = (backgroundBorderColor: Color) => {
    setOptions((previous) => ({
      ...previous,
      backgroundBorderColor,
    }));
  };

  const setBackgroundSize = (backgroundSize: number) => {
    setOptions((previous) => ({
      ...previous,
      backgroundSize,
    }));
  };

  return {
    options,
    setImage,
    setImageSize,
    setBackgroundShape,
    setBackgroundColor,
    setBackgroundBorderColor,
    setBackgroundSize,
  };
}
