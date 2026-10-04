import { CanvasRef } from '@utils/types';
import { Color } from '@workbench/enums/colors';
import { AlignmentShape, PointShape } from '@workbench/enums/shapes';

export function useUpdateFillColor(
  canvasRef: CanvasRef,
  refreshCanvas: () => void,
) {
  return (c: Color) => {
    console.log(`   Fill color: ${c}`);
    refreshCanvas();
  };
}

export function useUpdateBorderColor(
  canvasRef: CanvasRef,
  refreshCanvas: () => void,
) {
  return (c: Color) => {
    console.log(`   Border color: ${c}`);
    refreshCanvas();
  };
}

export function useUpdatePointShape(
  canvasRef: CanvasRef,
  refreshCanvas: () => void,
) {
  return (s: PointShape) => {
    console.log(`   Point shape: ${s}`);
    refreshCanvas();
  };
}

export function useUpdateAlignmentShape(
  canvasRef: CanvasRef,
  refreshCanvas: () => void,
) {
  return (s: AlignmentShape) => {
    console.log(`   Alignment shape: ${s}`);
    refreshCanvas();
  };
}

export function useUpdateBackgroundTransparency(
  canvasRef: CanvasRef,
  refreshCanvas: () => void,
) {
  return (t: boolean) => {
    console.log(`   Transparency: ${t}`);
    refreshCanvas();
  };
}
