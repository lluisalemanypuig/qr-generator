import { ECCSelect } from '@workbench/components/ecc-select';
import { LabelLeftAligned } from '@workbench/components/labels';
import { VerticalSpace } from '@workbench/components/spaces';
import { useQualityContext } from '@workbench/context/quality';

export function QualityPanel() {
  const { setECC } = useQualityContext();

  return (
    <>
      <VerticalSpace />
      <div className="horizontal col-4">
        <LabelLeftAligned text={'ECC'} />
        <ECCSelect setECC={setECC} />
      </div>
    </>
  );
}
