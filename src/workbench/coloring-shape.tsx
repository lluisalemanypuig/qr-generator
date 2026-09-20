import { ColorSelect } from '@components/color-select';
import { VerticalSpace } from '@components/spaces';
import '@css';
import { useQRGenerator } from '@workbench/context/context';

export function ColoringShape() {
  const { colorAndShape, setFillColor, setBorderColor } = useQRGenerator();

  return (
    <>
      <VerticalSpace />
      <div className="vertical">
        <div className="horizontal col-4">
          <label style={{ textAlign: 'left' }}>Fill</label>
          <ColorSelect
            initialValue={colorAndShape.fillColor}
            setColor={setFillColor}
          />
          <label style={{ textAlign: 'left' }}>Point shape</label>
          <select></select>
        </div>
        <div className="horizontal col-4">
          <label style={{ textAlign: 'left' }}>Border</label>
          <ColorSelect
            initialValue={colorAndShape.borderColor}
            setColor={setBorderColor}
          />
          <label style={{ textAlign: 'left' }}>Alignment shape</label>
          <select></select>
        </div>

        <div className="horizontal">
          <input type="checkbox"></input>
          <label>Transparent background</label>
        </div>
      </div>
    </>
  );
}
