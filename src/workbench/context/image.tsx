import { Color } from '@workbench/enums/colors';
import { ImageBackgroundShape } from '@workbench/enums/shapes';
import { useState } from 'react';

export interface QRImageOptions {
  componentsDisabled: boolean;
  backgroundComponentsDisabled: boolean;
  image: string | undefined; // this is not a string
  imageSize: number; // a percentage of the original image
  backgroundShape: ImageBackgroundShape;
  backgroundColor: Color;
  backgroundBorderColor: Color;
  backgroundSize: number;
}

export function QRImageOptionsState() {
  const [options, setOptions] = useState<QRImageOptions>({
    componentsDisabled: true,
    backgroundComponentsDisabled: true,
    image: undefined,
    imageSize: 1,
    backgroundShape: 'None',
    backgroundColor: 'White',
    backgroundBorderColor: 'Black',
    backgroundSize: 1,
  });

  const setComponentsDisabled = (componentsDisabled: boolean) => {
    setOptions((previous) => ({
      ...previous,
      componentsDisabled,
    }));
  };

  const setBackgroundComponentsDisabled = (
    backgroundComponentsDisabled: boolean,
  ) => {
    setOptions((previous) => ({
      ...previous,
      backgroundComponentsDisabled,
    }));
  };

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

    if (backgroundShape === 'None') {
      setBackgroundComponentsDisabled(true);
    } else {
      setBackgroundComponentsDisabled(false);
    }
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
    setComponentsDisabled,
    setBackgroundComponentsDisabled,
    setImageSize,
    setBackgroundShape,
    setBackgroundColor,
    setBackgroundBorderColor,
    setBackgroundSize,
  };
}
