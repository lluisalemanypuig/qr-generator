import { isNotDefined } from '@utils/defined';
import { useColorAndShapeContext } from '@workbench/context/color-shape';
import { useGeneratorContext } from '@workbench/context/context';
import { useImageContext } from '@workbench/context/image';
import { useQualityContext } from '@workbench/context/quality';
import { TextOptions } from '@workbench/options/text';
import { createContext, ReactNode, useContext, useState } from 'react';

interface Text {
  options: TextOptions;
  setText: (s: string) => void;
}

const TextContext = createContext<Text | null>(null);

export function TextProvider({ children }: { children: ReactNode }) {
  const { generateQrFromText } = useGeneratorContext();
  const { options: colorAndShape } = useColorAndShapeContext();
  const { options: image } = useImageContext();
  const { options: quality } = useQualityContext();

  const [options, setOptions] = useState<TextOptions>({
    text: '',
  });

  const setText = (text: string) => {
    setOptions((previous) => ({
      ...previous,
      text,
    }));
    generateQrFromText(text, colorAndShape, image, quality);
  };

  return (
    <TextContext.Provider
      value={{
        options,
        setText,
      }}
    >
      {children}
    </TextContext.Provider>
  );
}

export function useTextContext() {
  const context = useContext(TextContext);

  if (isNotDefined(context)) {
    throw new Error('useTextContext must be used inside TextContext');
  }

  return context;
}
