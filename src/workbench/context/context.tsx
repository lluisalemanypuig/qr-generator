import { isNotDefined } from '@utils/defined';
import {
  ColorAndShapeProvider,
  useColorAndShapeContext,
} from '@workbench/context/color-shape';
import { ImageProvider, useImageContext } from '@workbench/context/image';
import { QualityProvider, useQualityContext } from '@workbench/context/quality';
import { createContext, ReactNode, useContext, useEffect } from 'react';
import { TextProvider, useTextContext } from './text';

interface GeneratorContextType {
  generateQR: () => void;
}

const GeneratorContext = createContext<GeneratorContextType | null>(null);

function GeneratorProvider({ children }: { children: ReactNode }) {
  const { options: textOptions } = useTextContext();
  const { options: colorAndShapeOptions } = useColorAndShapeContext();
  const { options: imageOptions } = useImageContext();
  const { options: qualityOptions } = useQualityContext();

  const generateQR = () => {
    console.log(
      `Generating QR: ${textOptions.text}, ${colorAndShapeOptions.fillColor}`,
    );
  };

  useEffect(() => {
    generateQR();
  }, [textOptions, colorAndShapeOptions, imageOptions, qualityOptions]);

  return (
    <GeneratorContext.Provider
      value={{
        generateQR,
      }}
    >
      {children}
    </GeneratorContext.Provider>
  );
}

export function useGeneratorContext() {
  const context = useContext(GeneratorContext);

  if (isNotDefined(context)) {
    throw new Error(
      'useGeneratorContext must be used inside GeneratorProvider',
    );
  }

  return context;
}

export function Generator({ children }: { children: ReactNode }) {
  return (
    <TextProvider>
      <ColorAndShapeProvider>
        <ImageProvider>
          <QualityProvider>
            <GeneratorProvider>{children}</GeneratorProvider>
          </QualityProvider>
        </ImageProvider>
      </ColorAndShapeProvider>
    </TextProvider>
  );
}
