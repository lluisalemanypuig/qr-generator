import '@css';
import { ColorSelect } from '@workbench/components/color-select';
import { LabelLeftAligned } from '@workbench/components/labels';
import { RangeSelect } from '@workbench/components/range-select';
import { ShapeSelect } from '@workbench/components/shape-select';
import { VerticalSpace } from '@workbench/components/spaces';
import { useQRGeneratorContext } from '@workbench/context/context';
import { ALL_IMAGE_BACKGROUND_SHAPES } from '@workbench/enums/shapes';

export function ImageLoader() {
  const {
    image,
    setImage: _setImage,
    setEnableComponents,
    setImageSize,
    setBackgroundColor,
    setBackgroundBorderColor,
    setBackgroundShape,
    setBackgroundSize,
  } = useQRGeneratorContext();

  const loadImage = () => {
    setEnableComponents(true);
  };

  const removeImage = () => {
    setEnableComponents(false);
  };

  return (
    <>
      <VerticalSpace />
      <div className="horizontal col-1-3">
        <div className="vertical">
          <button onClick={loadImage}>Load image</button>
          <button onClick={removeImage} disabled={!image.componentsEnabled}>
            Remove image
          </button>
        </div>
        <div className="vertical">
          <div className="horizontal col-3">
            <LabelLeftAligned text={'Image size'} />
            <RangeSelect
              disabled={!image.componentsEnabled}
              setValue={setImageSize}
            />
            <LabelLeftAligned text={'%'} />
          </div>
          <div className="horizontal col-3">
            <LabelLeftAligned text={'Background shape'} />
            <ShapeSelect
              disabled={!image.componentsEnabled}
              initialValue={image.backgroundShape}
              allValues={ALL_IMAGE_BACKGROUND_SHAPES}
              setShape={setBackgroundShape}
            />
          </div>
          <div className="horizontal col-3">
            <LabelLeftAligned text={'Background color'} />
            <ColorSelect
              disabled={!image.componentsEnabled}
              initialValue={image.backgroundColor}
              setColor={setBackgroundColor}
            />
          </div>
          <div className="horizontal col-3">
            <LabelLeftAligned text={'Background border color'} />
            <ColorSelect
              disabled={!image.componentsEnabled}
              initialValue={image.backgroundBorderColor}
              setColor={setBackgroundBorderColor}
            />
          </div>
          <div className="horizontal col-3">
            <LabelLeftAligned text={'Background size'} />
            <RangeSelect
              disabled={!image.componentsEnabled}
              setValue={setBackgroundSize}
            />
            <LabelLeftAligned text={'%'} />
          </div>
        </div>
      </div>
    </>
  );
}
