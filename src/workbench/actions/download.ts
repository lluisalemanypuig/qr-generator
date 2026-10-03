import { isNotDefined } from '@utils/defined';
import { CanvasRef } from '@utils/types';

export function useDownloadSvg(canvasRef: CanvasRef) {
  return () => {
    const canvas = canvasRef.current;
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
