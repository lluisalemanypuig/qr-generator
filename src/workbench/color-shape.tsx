import { ColorSelect } from '@components/color-select';
import { LabelLeftAligned } from '@components/labels';
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
          <LabelLeftAligned text={'Fill color'} />
          <ColorSelect
            initialValue={colorAndShape.fillColor}
            setColor={setFillColor}
          />
          <LabelLeftAligned text={'Point shape'} />
          <ShapeSelect
            initialValue={colorAndShape.pointShape}
            allValues={ALL_POINT_SHAPES}
            setShape={setPointShape}
          />
        </div>
        <div className="horizontal col-4">
          <LabelLeftAligned text={'Border color'} />
          <ColorSelect
            initialValue={colorAndShape.borderColor}
            setColor={setBorderColor}
          />
          <LabelLeftAligned text={'Alignment shape'} />
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
