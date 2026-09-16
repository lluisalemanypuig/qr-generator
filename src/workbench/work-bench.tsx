import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { ColoringShape } from './coloring-shape';
import { ImageLoader } from './image-loader';
import { QRQualityVersion } from './qr-quality-version';

export function WorkBench() {
  return (
    <div>
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
