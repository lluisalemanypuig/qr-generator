import { ColoringShape } from '@workbench/coloring-shape';
import { ImageLoader } from '@workbench/image-loader';
import { QRQualityVersion } from '@workbench/qr-quality-version';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

export function WorkBench() {
  return (
    // This div should have a fixed position with respect to the bottom
    // of the page. The height should be the maximum height of the tabs,
    // the width should be maximum width of the tabs
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
