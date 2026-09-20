import { LabelLeftAligned } from '@components/labels';
import { VerticalSpace } from '@components/spaces';

export function QRQualityVersion() {
  return (
    <>
      <VerticalSpace />
      <div className="horizontal col-4">
        <LabelLeftAligned text={'ECC'} />
        <select></select>
      </div>
    </>
  );
}
