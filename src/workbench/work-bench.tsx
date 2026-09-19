import { ColoringShape } from '@workbench/coloring-shape';
import { ImageLoader } from '@workbench/image-loader';
import { QRQualityVersion } from '@workbench/qr-quality-version';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { QRGeneratorProvider } from './context/context';

function ControlPanel() {
  return (
    <div style={{ height: 220, width: 600 }}>
      <Tabs>
        <TabList>
          <Tab>Coloring and shape</Tab>
          <Tab>Load image</Tab>
          <Tab>QR quality</Tab>
        </TabList>

        <TabPanel>
          <ColoringShape />
        </TabPanel>
        <TabPanel>
          <ImageLoader />
        </TabPanel>
        <TabPanel>
          <QRQualityVersion />
        </TabPanel>
      </Tabs>
    </div>
  );
}

interface WorkbenchProps {
  download: () => void;
}

export function WorkBench({ download }: WorkbenchProps) {
  return (
    <QRGeneratorProvider>
      <div className="vertical">
        <label style={{ textAlign: 'left' }}>Encode text into a QR:</label>
        <div className="horizontal">
          <input
            className="input-text"
            style={{ width: '100%' }}
            type="text"
          ></input>
        </div>
        <div>
          <button onClick={download} style={{ float: 'right' }}>
            Download QR
          </button>
        </div>

        <ControlPanel />
      </div>
    </QRGeneratorProvider>
  );
}
