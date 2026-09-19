import '@css';
import { isNotDefined } from '@utils/defined';
import { WorkBench } from '@workbench/work-bench';
import { Canvas, Circle, Point, Rect } from 'fabric';
import { useEffect, useRef } from 'react';
import 'react-tabs/style/react-tabs.css';

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

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

export function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fabricRef = useRef<Canvas | null>(null);

  useEffect(() => {
    if (isNotDefined(canvasRef.current)) {
      return;
    }

    const canvas = new Canvas(canvasRef.current, {
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
      backgroundColor: '#ffffff',
    });

    fabricRef.current = canvas;

    // Add some objects
    const rectangle = new Rect({
      width: CANVAS_WIDTH - 20,
      height: CANVAS_HEIGHT - 20,
      fill: 'rgba(255, 0, 0, 0.5)',
      rx: 10,
      ry: 10,
      selectable: false,
    });
    rectangle.setPositionByOrigin(new Point(10, 10), 'left', 'top');

    const circle = new Circle({
      left: 400,
      top: 150,
      radius: 70,
      fill: 'rgba(0, 100, 255, 0.5)',
      selectable: false,
    });

    canvas.add(rectangle, circle);
    canvas.renderAll();

    // Cleanup
    return () => {
      canvas.dispose();
      fabricRef.current = null;
    };
  }, []);

  const downloadSvg = useDownloadSvg(fabricRef);

  return (
    <div className="app vertical">
      <div className="outline-border">
        <canvas ref={canvasRef} />
      </div>

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
          <button onClick={downloadSvg} style={{ float: 'right' }}>
            Download QR
          </button>
        </div>

        <WorkBench />
      </div>
    </div>
  );
}
