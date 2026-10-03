import { ECCSelect } from '@workbench/components/ecc-select';
import { LabelLeftAligned } from '@workbench/components/labels';
import { VerticalSpace } from '@workbench/components/spaces';
import { useQualityContext } from './context/quality';

export function QualityPanel() {
  const { options, setECC } = useQualityContext();

  return (
    <>
      <VerticalSpace />
      <div className="horizontal col-4">
        <LabelLeftAligned text={'ECC'} />
        <ECCSelect initialValue={options.ecc} setECC={setECC} />
      </div>
    </>
  );
}
