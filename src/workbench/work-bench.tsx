import { LabelLeftAligned } from '@workbench/components/labels';
import { ColorAndShapeProvider } from '@workbench/context/color-shape';
import {
  GeneratorProvider,
  useGeneratorContext,
} from '@workbench/context/context';
import { ImageProvider } from '@workbench/context/image';
import { QualityProvider } from '@workbench/context/quality';
import { TextProvider } from '@workbench/context/text';
import { InputText } from '@workbench/input-text';
import { ColorShapePanel } from '@workbench/panels/color-shape';
import { ImageLoaderPanel } from '@workbench/panels/image-loader';
import { QualityPanel } from '@workbench/panels/quality';
import { Canvas } from 'fabric';
import { PropsWithChildren } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

function ControlPanel() {
  const { downloadSvg } = useGeneratorContext();

  return (
    <div className="vertical">
      <LabelLeftAligned text={'Encode text into a QR:'} />
      <div className="horizontal">
        <InputText />
      </div>
      <div>
        <button onClick={downloadSvg} style={{ float: 'right' }}>
          Download QR
        </button>
      </div>

      <div style={{ height: 220, width: 600 }}>
        <Tabs>
          <TabList>
            <Tab>Coloring and shape</Tab>
            <Tab>Load image</Tab>
            <Tab>QR quality</Tab>
          </TabList>

          <TabPanel>
            <ColorShapePanel />
          </TabPanel>
          <TabPanel>
            <ImageLoaderPanel />
          </TabPanel>
          <TabPanel>
            <QualityPanel />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

interface WorkbenchProps extends PropsWithChildren {
  canvas: React.RefObject<Canvas | null>;
}

export function WorkBench({ canvas }: WorkbenchProps) {
  return (
    <GeneratorProvider canvasRef={canvas}>
      <ColorAndShapeProvider>
        <ImageProvider>
          <QualityProvider>
            <TextProvider>
              <ControlPanel />
            </TextProvider>
          </QualityProvider>
        </ImageProvider>
      </ColorAndShapeProvider>
    </GeneratorProvider>
  );
}
