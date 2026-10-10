import { isNotDefined } from '@utils/defined';
import { ECC } from '@workbench/enums/quality';
import { QualityOptions } from '@workbench/options/quality';
import { createContext, ReactNode, useContext, useRef } from 'react';

interface Quality {
  options: React.RefObject<QualityOptions>;
  setECC: (ecc: ECC) => void;
}

const QualityContext = createContext<Quality | null>(null);

export function QualityProvider({ children }: { children: ReactNode }) {
  const options = useRef<QualityOptions>({
    ecc: 'Low',
  });

  const setECC = (ecc: ECC) => {
    options.current.ecc = ecc;
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
