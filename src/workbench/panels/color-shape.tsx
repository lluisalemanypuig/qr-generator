import '@css';
import { ColorSelect } from '@workbench/components/color-select';
import { LabelLeftAligned } from '@workbench/components/labels';
import { ShapeSelect } from '@workbench/components/shape-select';
import { VerticalSpace } from '@workbench/components/spaces';
import { useColorAndShapeContext } from '@workbench/context/color-shape';
import {
  ALL_ALIGNMENT_SHAPES,
  ALL_POINT_SHAPES,
} from '@workbench/enums/shapes';

export function ColorShapePanel() {
  const {
    setFillColor,
    setBorderColor,
    setPointShape,
    setAlignmentShape,
    setTransparentBackground,
  } = useColorAndShapeContext();

  return (
    <>
      <VerticalSpace />
      <div className="vertical">
        <div className="horizontal col-4">
          <LabelLeftAligned text={'Fill color'} />
          <ColorSelect setColor={setFillColor} />
          <LabelLeftAligned text={'Point shape'} />
          <ShapeSelect allValues={ALL_POINT_SHAPES} setShape={setPointShape} />
        </div>
        <div className="horizontal col-4">
          <LabelLeftAligned text={'Border color'} />
          <ColorSelect setColor={setBorderColor} />
          <LabelLeftAligned text={'Alignment shape'} />
          <ShapeSelect
            allValues={ALL_ALIGNMENT_SHAPES}
            setShape={setAlignmentShape}
          />
        </div>

        <div className="horizontal">
          <input
            onChange={(event) => setTransparentBackground(event.target.checked)}
            type="checkbox"
          ></input>
          <label>Transparent background</label>
        </div>
      </div>
    </>
  );
}
