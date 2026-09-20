import { useQRGeneratorContext } from '@workbench/context/context';

export function InputText() {
  const { text, setText } = useQRGeneratorContext();

  return (
    <input
      className="input-text"
      style={{ width: '100%' }}
      onChange={(event) => setText(event.target.value)}
      type="text"
    ></input>
  );
}
