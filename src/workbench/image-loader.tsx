import { ColorSelect } from '@components/color-select';
import { LabelLeftAligned } from '@components/labels';
import { RangeSelect } from '@components/range-select';
import { ShapeSelect } from '@components/shape-select';
import { VerticalSpace } from '@components/spaces';
import '@css';
import { useQRGenerator } from '@workbench/context/context';
import { ALL_IMAGE_BACKGROUND_SHAPES } from '@workbench/enums/shapes';

export function ImageLoader() {
  const {
    image,
    setImageSize,
    setBackgroundColor,
    setBackgroundBorderColor,
    setBackgroundShape,
    setBackgroundSize,
  } = useQRGenerator();

  return (
    <>
      <VerticalSpace />
      <div className="horizontal col-1-3">
        <div className="vertical">
          <button>Load image</button>
          <button>Remove image</button>
        </div>
        <div className="vertical">
          <div className="horizontal col-3">
            <LabelLeftAligned text={'Image size'} />
            <RangeSelect setValue={setImageSize} />
            <LabelLeftAligned text={'%'} />
          </div>
          <div className="horizontal col-3">
            <LabelLeftAligned text={'Background shape'} />
            <ShapeSelect
              initialValue={image.backgroundShape}
              allValues={ALL_IMAGE_BACKGROUND_SHAPES}
              setShape={setBackgroundShape}
            />
          </div>
          <div className="horizontal col-3">
            <LabelLeftAligned text={'Background color'} />
            <ColorSelect
              initialValue={image.backgroundColor}
              setColor={setBackgroundColor}
            />
          </div>
          <div className="horizontal col-3">
            <LabelLeftAligned text={'Background border color'} />
            <ColorSelect
              initialValue={image.backgroundBorderColor}
              setColor={setBackgroundBorderColor}
            />
          </div>
          <div className="horizontal col-3">
            <LabelLeftAligned text={'Background size'} />
            <RangeSelect setValue={setBackgroundSize} />
            <LabelLeftAligned text={'%'} />
          </div>
        </div>
      </div>
    </>
  );
}
