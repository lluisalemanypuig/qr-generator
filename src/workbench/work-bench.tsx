import { LabelLeftAligned } from '@components/labels';
import { isNotDefined } from '@utils/defined';
import { ColorShape } from '@workbench/color-shape';
import { ImageLoader } from '@workbench/image-loader';
import { QRQualityVersion } from '@workbench/qr-quality-version';
import { Canvas } from 'fabric';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { QRGeneratorProvider } from './context/context';

function useDownloadSvg(fabricRef: React.RefObject<Canvas | null>) {
  return () => {
    const canvas = fabricRef.current;
    if (isNotDefined(canvas)) {
      return;
    }

    const svg = canvas.toSVG();

    const blob = new Blob([svg], {
      type: 'image/svg+xml;charset=utf-8',
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'canvas.svg';
    link.click();

    URL.revokeObjectURL(url);
  };
}

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
          <ColorShape />
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
  canvasRef: React.RefObject<Canvas | null>;
}

export function WorkBench({ canvasRef }: WorkbenchProps) {
  const downloadSvg = useDownloadSvg(canvasRef);

  return (
    <QRGeneratorProvider>
      <div className="vertical">
        <LabelLeftAligned text={'Encode text into a QR:'} />
        <div className="horizontal">
          <input
            className="input-text"
            style={{ width: '100%' }}
            type="text"
          ></input>
        </div>
        <div>
          <button onClick={downloadSvg} style={{ float: 'right' }}>
            Download QR
          </button>
        </div>

        <ControlPanel />
      </div>
    </QRGeneratorProvider>
  );
}
