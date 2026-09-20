import { ECC, ECC_VALUES } from '@workbench/enums/quality';

interface ECCSelectProps {
  initialValue: string;
  setECC: (code: ECC) => void;
}

function fromStringToECC(code: string): ECC {
  for (const v of ECC_VALUES) {
    if (code === v) {
      return code as ECC;
    }
  }
  return 'Low';
}

export function ECCSelect({ initialValue, setECC }: ECCSelectProps) {
  return (
    <select
      value={initialValue}
      onChange={(event) => setECC(fromStringToECC(event.target.value))}
    >
      {ECC_VALUES.map((code: ECC) => (
        <option value={code}>{code}</option>
      ))}
    </select>
  );
}
