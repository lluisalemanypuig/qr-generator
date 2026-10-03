import { isDefined } from '@utils/defined';
import { CanvasRef } from '@utils/types';

export function useRenderCanvasFromtext(canvasRef: CanvasRef) {
  return (text: string) => {};
}

export function useRefreshCanvas(canvasRef: CanvasRef) {
  return () => {
    if (isDefined(canvasRef.current)) {
      canvasRef.current.renderAll();
    }
  };
}
