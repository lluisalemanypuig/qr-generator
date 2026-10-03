import { isDefined } from '@utils/defined';
import { CanvasRef } from '@utils/types';

export function useRenderCanvasFromtext(
  canvasRef: CanvasRef,
  refreshCanvas: () => void,
) {
  return (text: string) => {
    console.log(`Rendering full QR with text '${text}'`);
    refreshCanvas();
  };
}

export function useRefreshCanvas(canvasRef: CanvasRef) {
  return () => {
    console.log(`Refresh QR after some property has changed`);

    if (isDefined(canvasRef.current)) {
      canvasRef.current.renderAll();
    }
  };
}
