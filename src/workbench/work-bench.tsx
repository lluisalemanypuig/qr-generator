import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { ColoringShape } from '@workbench/coloring-shape';
import { ImageLoader } from '@workbench/image-loader';
import { QRQualityVersion } from '@workbench/qr-quality-version';

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
