import { useState } from 'react';

export interface TextOptions {
  text: string;
}

export function TextOptionsState() {
  const [options, setOptions] = useState<TextOptions>({
    text: '',
  });

  const setText = (text: string) => {
    setOptions((previous) => ({
      ...previous,
      text,
    }));
  };

  return { options, setText };
}
