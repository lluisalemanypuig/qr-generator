import { ECC } from '@workbench/enums/quality';
import { useState } from 'react';

export interface QRQualityOptions {
  ecc: ECC;
}

export function QRQualityOptionsState() {
  const [options, setOptions] = useState<QRQualityOptions>({
    ecc: 'LOW',
  });

  const setECC = (ecc: ECC) => {
    setOptions((previous) => ({
      ...previous,
      ecc,
    }));
  };

  return { options, setECC };
}
