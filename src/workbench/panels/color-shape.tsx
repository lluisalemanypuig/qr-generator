import '@css';
import { ColorSelect } from '@workbench/components/color-select';
import { LabelLeftAligned } from '@workbench/components/labels';
import { ShapeSelect } from '@workbench/components/shape-select';
import { VerticalSpace } from '@workbench/components/spaces';
import {
  ALL_ALIGNMENT_SHAPES,
  ALL_POINT_SHAPES,
} from '@workbench/enums/shapes';
import { useColorAndShapeContext } from '../context/color-shape';

export function ColorShapePanel() {
  const {
    options,
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
          <ColorSelect
            initialValue={options.fillColor}
            setColor={setFillColor}
          />
          <LabelLeftAligned text={'Point shape'} />
          <ShapeSelect
            initialValue={options.pointShape}
            allValues={ALL_POINT_SHAPES}
            setShape={setPointShape}
          />
        </div>
        <div className="horizontal col-4">
          <LabelLeftAligned text={'Border color'} />
          <ColorSelect
            initialValue={options.borderColor}
            setColor={setBorderColor}
          />
          <LabelLeftAligned text={'Alignment shape'} />
          <ShapeSelect
            initialValue={options.alignmentShape}
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
