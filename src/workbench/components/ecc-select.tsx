import { ECC, ECC_VALUES } from '@workbench/enums/quality';

interface ECCSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
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

export function ECCSelect({
  initialValue,
  setECC,
  ...selectProps
}: ECCSelectProps) {
  return (
    <select
      {...selectProps}
      value={initialValue}
      onChange={(event) => setECC(fromStringToECC(event.target.value))}
    >
      {ECC_VALUES.map((code: ECC) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </select>
  );
}
