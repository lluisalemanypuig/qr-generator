import { isNotDefined } from '@utils/defined';
import { ECC } from '@workbench/enums/quality';
import { createContext, ReactNode, useContext, useState } from 'react';

interface QualityOptions {
  ecc: ECC;
}

interface Quality {
  options: QualityOptions;
  setECC: (ecc: ECC) => void;
}

const QualityContext = createContext<Quality | null>(null);

export function QualityProvider({ children }: { children: ReactNode }) {
  const [options, setOptions] = useState<QualityOptions>({
    ecc: 'Low',
  });

  const setECC = (ecc: ECC) => {
    setOptions((previous) => ({
      ...previous,
      ecc,
    }));
  };

  return (
    <QualityContext.Provider
      value={{
        options,
        setECC,
      }}
    >
      {children}
    </QualityContext.Provider>
  );
}

export function useQualityContext() {
  const context = useContext(QualityContext);

  if (isNotDefined(context)) {
    throw new Error('useQualityContext must be used inside QualityContext');
  }

  return context;
}
