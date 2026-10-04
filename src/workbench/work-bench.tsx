import { ColorAndShapeProvider } from '@workbench/context/color-shape';
import { GeneratorPipelineProvider } from '@workbench/context/generator-pipeline';
import { ImageProvider } from '@workbench/context/image';
import { QualityProvider } from '@workbench/context/quality';
import { ColorShapePanel } from '@workbench/panels/color-shape';
import { ImageLoaderPanel } from '@workbench/panels/image-loader';
import { QualityPanel } from '@workbench/panels/quality';
import { TextPanel } from '@workbench/panels/text-panel';
import { Canvas } from 'fabric';
import { PropsWithChildren } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

function ControlPanel() {
  return (
    <div className="vertical">
      <TextPanel />

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
    <GeneratorPipelineProvider canvasRef={canvas}>
      <ColorAndShapeProvider>
        <ImageProvider>
          <QualityProvider>
            <ControlPanel />
          </QualityProvider>
        </ImageProvider>
      </ColorAndShapeProvider>
    </GeneratorPipelineProvider>
  );
}
