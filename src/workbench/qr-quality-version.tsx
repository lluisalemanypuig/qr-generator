import { ECCSelect } from '@workbench/components/ecc-select';
import { LabelLeftAligned } from '@workbench/components/labels';
import { VerticalSpace } from '@workbench/components/spaces';
import { useQRGeneratorContext } from '@workbench/context/context';

export function QRQualityVersion() {
  const { quality, setECC } = useQRGeneratorContext();

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
