import { ColorSelect } from '@components/color-select';
import { ShapeSelect } from '@components/shape-select';
import { VerticalSpace } from '@components/spaces';
import '@css';
import { useQRGenerator } from '@workbench/context/context';
import {
  ALL_ALIGNMENT_SHAPES,
  ALL_POINT_SHAPES,
} from '@workbench/enums/shapes';

export function ColorShape() {
  const {
    colorAndShape,
    setFillColor,
    setBorderColor,
    setPointShape,
    setAlignmentShape,
  } = useQRGenerator();

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
          <ShapeSelect
            initialValue={colorAndShape.pointShape}
            allValues={ALL_POINT_SHAPES}
            setShape={setPointShape}
          />
        </div>
        <div className="horizontal col-4">
          <label style={{ textAlign: 'left' }}>Border</label>
          <ColorSelect
            initialValue={colorAndShape.borderColor}
            setColor={setBorderColor}
          />
          <label style={{ textAlign: 'left' }}>Alignment shape</label>
          <ShapeSelect
            initialValue={colorAndShape.alignmentShape}
            allValues={ALL_ALIGNMENT_SHAPES}
            setShape={setAlignmentShape}
          />
        </div>

        <div className="horizontal">
          <input type="checkbox"></input>
          <label>Transparent background</label>
        </div>
      </div>
    </>
  );
}
