import { isNotDefined } from '@utils/defined';
import { CanvasRef } from '@utils/types';
import { useDownloadSvg } from '@workbench/actions/download';
import {
  useRefreshCanvas,
  useRenderCanvasFromtext,
} from '@workbench/actions/render';
import { ColorAndShapeOptions } from '@workbench/options/color-shape';
import { ImageOptions } from '@workbench/options/image';
import { QualityOptions } from '@workbench/options/quality';
import { createContext, PropsWithChildren, useContext } from 'react';

interface GeneratorContextType {
  canvasRef: CanvasRef;

  generateQrFromText: (
    t: string,
    colorAndShape: ColorAndShapeOptions,
    image: ImageOptions,
    quality: QualityOptions,
  ) => void;
  refreshCanvas: () => void;
  downloadSvg: () => void;
}

const GeneratorContext = createContext<GeneratorContextType | null>(null);

interface GeneratorProviderProps extends PropsWithChildren {
  canvasRef: CanvasRef;
}

export function GeneratorProvider({
  children,
  canvasRef,
}: GeneratorProviderProps) {
  const refreshCanvas = useRefreshCanvas(canvasRef);

  return (
    <GeneratorContext.Provider
      value={{
        canvasRef,
        generateQrFromText: useRenderCanvasFromtext(canvasRef, refreshCanvas),
        refreshCanvas: refreshCanvas,
        downloadSvg: useDownloadSvg(canvasRef),
      }}
    >
      {children}
    </GeneratorContext.Provider>
  );
}

export function useGeneratorContext() {
  const context = useContext(GeneratorContext);

  if (isNotDefined(context)) {
    throw new Error(
      'useGeneratorContext must be used inside GeneratorProvider',
    );
  }

  return context;
}
