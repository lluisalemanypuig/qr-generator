import { LabelLeftAligned } from '@workbench/components/labels';
import { Generator, useGeneratorContext } from '@workbench/context/context';
import { InputText } from '@workbench/input-text';
import { ColorShapePanel } from '@workbench/panels/color-shape';
import { ImageLoaderPanel } from '@workbench/panels/image-loader';
import { QualityPanel } from '@workbench/panels/quality';
import { Canvas } from 'fabric';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

function ControlPanel() {
  const { downloadSvg: downloadQR } = useGeneratorContext();

  return (
    <div className="vertical">
      <LabelLeftAligned text={'Encode text into a QR:'} />
      <div className="horizontal">
        <InputText />
      </div>
      <div>
        <button onClick={downloadQR} style={{ float: 'right' }}>
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

interface WorkbenchProps {
  canvas: React.RefObject<Canvas | null>;
}

export function WorkBench({ canvas: canvasRef }: WorkbenchProps) {
  return (
    <Generator canvas={canvasRef}>
      <ControlPanel />
    </Generator>
  );
}
