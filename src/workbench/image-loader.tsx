import { ColorSelect } from '@components/color-select';
import { ShapeSelect } from '@components/shape-select';
import { VerticalSpace } from '@components/spaces';
import '@css';
import { useQRGenerator } from '@workbench/context/context';
import { ALL_IMAGE_BACKGROUND_SHAPES } from '@workbench/enums/shapes';

export function ImageLoader() {
  const {
    image,
    setBackgroundColor,
    setBackgroundBorderColor,
    setBackgroundShape,
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
            <label style={{ textAlign: 'left' }}>Image size</label>
            <input type="range" />
            <label style={{ textAlign: 'left' }}>%</label>
          </div>
          <div className="horizontal col-3">
            <label style={{ textAlign: 'left' }}>Background shape</label>
            <ShapeSelect
              initialValue={image.backgroundShape}
              allValues={ALL_IMAGE_BACKGROUND_SHAPES}
              setShape={setBackgroundShape}
            />
          </div>
          <div className="horizontal col-3">
            <label style={{ textAlign: 'left' }}>Background color</label>
            <ColorSelect
              initialValue={image.backgroundColor}
              setColor={setBackgroundColor}
            />
          </div>
          <div className="horizontal col-3">
            <label style={{ textAlign: 'left' }}>Background border</label>
            <ColorSelect
              initialValue={image.backgroundBorderColor}
              setColor={setBackgroundBorderColor}
            />
          </div>
          <div className="horizontal col-3">
            <label style={{ textAlign: 'left' }}>Background size</label>
            <input type="range" />
            <label style={{ textAlign: 'left' }}>%</label>
          </div>
        </div>
      </div>
    </>
  );
}
