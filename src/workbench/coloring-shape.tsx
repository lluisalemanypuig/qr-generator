import { VerticalSpace } from '@components/spaces';
import '@css';
import { useQRGenerator } from '@workbench/context/context';
import { Color, COLORS } from '@workbench/enums/colors';

export function ColoringShape() {
  const { colorAndShape, setFillColor } = useQRGenerator();

  return (
    <>
      <VerticalSpace />
      <div className="vertical">
        <div className="horizontal col-4">
          <label style={{ textAlign: 'left' }}>Fill</label>
          <select
            value={colorAndShape.fillColor}
            onChange={(event) => setFillColor(event.target.value)}
          >
            {COLORS.map((color: Color) => {
              return <option value={color.id}>{color.name}</option>;
            })}
          </select>
          <label style={{ textAlign: 'left' }}>Point shape</label>
          <select></select>
        </div>
        <div className="horizontal col-4">
          <label style={{ textAlign: 'left' }}>Border</label>
          <select></select>
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
