import '@css';
import { ColorSelect } from '@workbench/components/color-select';
import { LabelLeftAligned } from '@workbench/components/labels';
import { RangeSelect } from '@workbench/components/range-select';
import { ShapeSelect } from '@workbench/components/shape-select';
import { VerticalSpace } from '@workbench/components/spaces';
import { ALL_IMAGE_BACKGROUND_SHAPES } from '@workbench/enums/shapes';
import { useImageContext } from '../context/image';

export function ImageLoaderPanel() {
  const {
    options,
    setImage: _setImage,
    setComponentsDisabled,
    setImageSize,
    setBackgroundColor,
    setBackgroundBorderColor,
    setBackgroundShape,
    setBackgroundSize,
  } = useImageContext();

  const loadImage = () => {
    setComponentsDisabled(false);
  };

  const removeImage = () => {
    setComponentsDisabled(true);
  };

  return (
    <>
      <VerticalSpace />
      <div className="horizontal col-1-3">
        <div className="vertical">
          <button onClick={loadImage}>Load image</button>
          <button onClick={removeImage} disabled={options.componentsDisabled}>
            Remove image
          </button>
        </div>
        <div className="vertical">
          <div className="horizontal col-3">
            <LabelLeftAligned text={'Image size'} />
            <RangeSelect
              disabled={options.componentsDisabled}
              setValue={setImageSize}
            />
            <LabelLeftAligned text={'%'} />
          </div>
          <div className="horizontal col-3">
            <LabelLeftAligned text={'Background shape'} />
            <ShapeSelect
              disabled={options.componentsDisabled}
              initialValue={options.backgroundShape}
              allValues={ALL_IMAGE_BACKGROUND_SHAPES}
              setShape={setBackgroundShape}
            />
          </div>
          <div className="horizontal col-3">
            <LabelLeftAligned text={'Background color'} />
            <ColorSelect
              disabled={
                options.componentsDisabled ||
                options.backgroundComponentsDisabled
              }
              initialValue={options.backgroundColor}
              setColor={setBackgroundColor}
            />
          </div>
          <div className="horizontal col-3">
            <LabelLeftAligned text={'Background border color'} />
            <ColorSelect
              disabled={
                options.componentsDisabled ||
                options.backgroundComponentsDisabled
              }
              initialValue={options.backgroundBorderColor}
              setColor={setBackgroundBorderColor}
            />
          </div>
          <div className="horizontal col-3">
            <LabelLeftAligned text={'Background size'} />
            <RangeSelect
              disabled={
                options.componentsDisabled ||
                options.backgroundComponentsDisabled
              }
              setValue={setBackgroundSize}
            />
            <LabelLeftAligned text={'%'} />
          </div>
        </div>
      </div>
    </>
  );
}
