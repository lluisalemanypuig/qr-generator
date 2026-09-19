import { VerticalSpace } from '@components/spaces';

export function QRQualityVersion() {
  return (
    <>
      <VerticalSpace />
      <div className="horizontal col-4">
        <label>ECC</label>
        <select></select>
      </div>
    </>
  );
}
