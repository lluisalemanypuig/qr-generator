import { isNotDefined } from '@utils/defined';
import { Color } from '@workbench/enums/colors';
import { ImageBackgroundShape } from '@workbench/enums/shapes';
import { ImageControl, ImageOptions } from '@workbench/options/image';
import { createContext, ReactNode, useContext, useRef, useState } from 'react';

interface Image {
  controlValues: ImageControl;
  options: React.RefObject<ImageOptions>;

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
  const [controlValues, setControlValues] = useState<ImageControl>({
    componentsDisabled: true,
    backgroundComponentsDisabled: true,
    image: undefined,
    backgroundShape: 'None',
  });

  const setComponentsDisabled = (componentsDisabled: boolean) => {
    setControlValues((previous) => ({
      ...previous,
      componentsDisabled,
    }));
  };

  const setBackgroundComponentsDisabled = (
    backgroundComponentsDisabled: boolean,
  ) => {
    setControlValues((previous) => ({
      ...previous,
      backgroundComponentsDisabled,
    }));
  };

  const setImage = (image: string | undefined) => {
    setControlValues((previous) => ({
      ...previous,
      image,
    }));
  };

  const setBackgroundShape = (backgroundShape: ImageBackgroundShape) => {
    setControlValues((previous) => ({
      ...previous,
      backgroundShape,
    }));

    if (backgroundShape === 'None') {
      setBackgroundComponentsDisabled(true);
    } else {
      setBackgroundComponentsDisabled(false);
    }
  };

  const options = useRef<ImageOptions>({
    imageSize: 1,
    backgroundColor: { name: 'White', id: 'white' },
    backgroundBorderColor: { name: 'Black', id: 'black' },
    backgroundSize: 1,
  });

  const setImageSize = (imageSize: number) => {
    options.current.imageSize = imageSize;
  };

  const setBackgroundColor = (backgroundColor: Color) => {
    options.current.backgroundColor = backgroundColor;
  };

  const setBackgroundBorderColor = (backgroundBorderColor: Color) => {
    options.current.backgroundBorderColor = backgroundBorderColor;
  };

  const setBackgroundSize = (backgroundSize: number) => {
    options.current.backgroundSize = backgroundSize;
  };

  return (
    <ImageContext.Provider
      value={{
        controlValues,
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
