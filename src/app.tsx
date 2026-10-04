import '@css';
import { isNotDefined } from '@utils/defined';
import { WorkBench } from '@workbench/work-bench';
import { Canvas, Circle, Point, Rect } from 'fabric';
import { useEffect, useRef } from 'react';
import 'react-tabs/style/react-tabs.css';

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

export function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fabricRef = useRef<Canvas | null>(null);

  const rectangles: Rect[] = [
    new Rect({
      width: CANVAS_WIDTH - 20,
      height: CANVAS_HEIGHT - 20,
      fill: 'rgba(255, 0, 0, 0.5)',
      rx: 10,
      ry: 10,
      selectable: false,
    }),
    new Rect({
      width: CANVAS_WIDTH - 50,
      height: CANVAS_HEIGHT - 50,
      fill: 'rgba(255, 0, 255, 0.5)',
      rx: 10,
      ry: 10,
      selectable: false,
    }),
  ];
  rectangles[0].setPositionByOrigin(new Point(10, 10), 'left', 'top');
  rectangles[1].setPositionByOrigin(new Point(25, 25), 'left', 'top');

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

    const circle = new Circle({
      left: 400,
      top: 150,
      radius: 70,
      fill: 'rgba(0, 100, 255, 0.5)',
      selectable: false,
    });

    canvas.add(...rectangles, circle);
    canvas.renderAll();

    // Cleanup
    return () => {
      canvas.dispose();
      fabricRef.current = null;
    };
  }, []);

  return (
    <div className="app vertical">
      <div className="outline-border">
        <canvas ref={canvasRef} />
      </div>

      <WorkBench canvas={fabricRef} />
    </div>
  );
}
