import '@css/app.css';
import '@css/button.css';
import '@css/input-text.css';
import '@css/outline-border.css';
import { WorkBench } from '@workbench/work-bench';
import { Layer, Rect, Stage } from 'react-konva';
import 'react-tabs/style/react-tabs.css';

export function App() {
  const stageWidth = 200;
  const stageHeight = 200;

  return (
    <div className="app vertical">
      <div className="outline-border">
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

      <div className="horizontal">
        <input className="input-text" type="text"></input>
        <button>Download QR</button>
      </div>

      <WorkBench />
    </div>
  );
}
