import { isNotDefined } from '@utils/defined';
import { createContext, ReactNode, useContext, useState } from 'react';

interface TextOptions {
  text: string;
}

interface Text {
  options: TextOptions;
  setText: (s: string) => void;
}

const TextContext = createContext<Text | null>(null);

export function TextProvider({ children }: { children: ReactNode }) {
  const [options, setOptions] = useState<TextOptions>({
    text: '',
  });

  const setText = (text: string) => {
    setOptions((previous) => ({
      ...previous,
      text,
    }));
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
