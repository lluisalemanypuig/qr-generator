import { isDefined } from '@utils/defined';
import { CanvasRef } from '@utils/types';
import { ColorAndShapeOptions } from '@workbench/options/color-shape';
import { ImageOptions } from '@workbench/options/image';
import { QualityOptions } from '@workbench/options/quality';

export function useRenderCanvasFromtext(
  canvasRef: CanvasRef,
  refreshCanvas: () => void,
) {
  return (
    text: string,
    colorAndShape: ColorAndShapeOptions,
    image: ImageOptions,
    quality: QualityOptions,
  ) => {
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
