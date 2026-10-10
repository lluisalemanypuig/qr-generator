import { isNotDefined } from '@utils/defined';
import { Color } from '@workbench/enums/colors';
import { ImageBackgroundShape } from '@workbench/enums/shapes';
import { ImageOptions } from '@workbench/options/image';
import { createContext, ReactNode, useContext, useState } from 'react';

interface Image {
  options: ImageOptions;
  setImage: (image: string | undefined) => void;
  setComponentsDisabled: (v: boolean) => void;
  setBackgroundComponentsDisabled: (v: boolean) => void;
  setImageSize: (size: number) => void;
  setBackgroundShape: (shape: ImageBackgroundShape) => void;
  setBackgroundColor: (backgroundColor: Color) => void;
  setBackgroundBorderColor: (backgroundBorderColor: Color) => void;
  setBackgroundSize: (size: number) => void;
}

const ImageContext = createContext<Image | null>(null);

export function ImageProvider({ children }: { children: ReactNode }) {
  const [options, setOptions] = useState<ImageOptions>({
    componentsDisabled: true,
    backgroundComponentsDisabled: true,
    image: undefined,
    imageSize: 1,
    backgroundShape: 'None',
    backgroundColor: { name: 'White', id: 'white' },
    backgroundBorderColor: { name: 'Black', id: 'black' },
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

  return (
    <ImageContext.Provider
      value={{
        options,
        setImage,
        setComponentsDisabled,
        setBackgroundComponentsDisabled,
        setImageSize,
        setBackgroundShape,
        setBackgroundColor,
        setBackgroundBorderColor,
        setBackgroundSize,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}

export function useImageContext() {
  const context = useContext(ImageContext);

  if (isNotDefined(context)) {
    throw new Error('useImageContext must be used inside ImageContext');
  }

  return context;
}
