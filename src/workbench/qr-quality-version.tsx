import { ECCSelect } from '@components/ecc-select';
import { LabelLeftAligned } from '@components/labels';
import { VerticalSpace } from '@components/spaces';
import { useQRGenerator } from '@workbench/context/context';

export function QRQualityVersion() {
  const { quality, setECC } = useQRGenerator();

  return (
    <>
      <VerticalSpace />
      <div className="horizontal col-4">
        <LabelLeftAligned text={'ECC'} />
        <ECCSelect initialValue={quality.ecc} setECC={setECC} />
      </div>
    </>
  );
}
