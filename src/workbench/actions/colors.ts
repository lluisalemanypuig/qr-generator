import { isNotDefined } from '@utils/defined';
import { CanvasRef } from '@utils/types';
import { Color } from '@workbench/enums/colors';
import { AlignmentShape, PointShape } from '@workbench/enums/shapes';
import { Canvas } from 'fabric';

function assertCanvasDefined(
  canvas: Canvas | null,
): asserts canvas is NonNullable<Canvas> {
  if (isNotDefined(canvas)) {
    throw new Error('Canvas undefined');
  }
}

export function useUpdateFillColor(
  canvasRef: CanvasRef,
  refreshCanvas: () => void,
) {
  return (c: Color) => {
    assertCanvasDefined(canvasRef.current);

    canvasRef.current.getObjects().forEach((o) => {
      o.set('fill', c);
    });
    refreshCanvas();
  };
}

export function useUpdateBorderColor(
  canvasRef: CanvasRef,
  refreshCanvas: () => void,
) {
  return (c: Color) => {
    assertCanvasDefined(canvasRef.current);

    canvasRef.current.getObjects().forEach((o) => {
      o.set('stroke', c);
    });
    refreshCanvas();
  };
}

export function useUpdatePointShape(
  canvasRef: CanvasRef,
  refreshCanvas: () => void,
) {
  return (s: PointShape) => {
    assertCanvasDefined(canvasRef.current);

    console.log(`   Point shape: ${s}`);
    refreshCanvas();
  };
}

export function useUpdateAlignmentShape(
  canvasRef: CanvasRef,
  refreshCanvas: () => void,
) {
  return (s: AlignmentShape) => {
    assertCanvasDefined(canvasRef.current);

    console.log(`   Alignment shape: ${s}`);
    refreshCanvas();
  };
}

export function useUpdateBackgroundTransparency(
  canvasRef: CanvasRef,
  refreshCanvas: () => void,
) {
  return (t: boolean) => {
    assertCanvasDefined(canvasRef.current);

    console.log(`   Transparency: ${t}`);
    refreshCanvas();
  };
}
