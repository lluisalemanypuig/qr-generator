import { useTextContext } from '@workbench/context/text';

export function InputText() {
  const { options: _options, setText } = useTextContext();

  return (
    <input
      className="input-text"
      style={{ width: '100%' }}
      onChange={(event) => setText(event.target.value)}
      type="text"
    ></input>
  );
}
