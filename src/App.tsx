import 'react-tabs/style/react-tabs.css';
import './assets/css/App.css';
import './assets/css/Button.css';
import './assets/css/HorizontalSpace.css';
import './assets/css/InputText.css';
import './assets/css/OutlineBorder.css';

import { Layer, Rect, Stage } from 'react-konva';
import { WorkBench } from './workbench/work-bench';

export function App() {
  const stageWidth = 200;
  const stageHeight = 200;

  return (
    <div className="App">
      <div className="OutlineBorder">
        <Stage width={stageWidth} height={stageHeight}>
          <Layer>
            <Rect
              x={0}
              y={0}
              width={stageWidth}
              height={stageHeight}
              fill="white"
              shadowBlur={0}
              draggable={false}
            />
          </Layer>
        </Stage>
      </div>

      <div className="HorizontalSpace">
        <input className="InputText" type="text"></input>
        <button className="Button">Save QR to disk</button>
      </div>

      <WorkBench />
    </div>
  );
}
