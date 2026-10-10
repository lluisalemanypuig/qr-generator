import { LabelLeftAligned } from '@workbench/components/labels';
import { useColorAndShapeContext } from '@workbench/context/color-shape';
import { useGeneratorPipelineContext } from '@workbench/context/generator-pipeline';
import { useImageContext } from '@workbench/context/image';
import { useQualityContext } from '@workbench/context/quality';

export function TextPanel() {
  const { downloadSvg } = useGeneratorPipelineContext();

  const { generateQrFromText } = useGeneratorPipelineContext();
  const { options: colorAndShape } = useColorAndShapeContext();
  const { options: image } = useImageContext();
  const { options: quality } = useQualityContext();

  return (
    <>
      <LabelLeftAligned text={'Encode text into a QR:'} />
      <div className="horizontal">
        <input
          className="input-text"
          style={{ width: '100%' }}
          onChange={(event) =>
            generateQrFromText(
              event.target.value,
              colorAndShape.current,
              image,
              quality.current,
            )
          }
          type="text"
        ></input>
      </div>
      <div>
        <button onClick={downloadSvg} style={{ float: 'right' }}>
          Download QR
        </button>
      </div>
    </>
  );
}
