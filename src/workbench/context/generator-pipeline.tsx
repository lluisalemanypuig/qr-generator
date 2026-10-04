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

interface GeneratorPipelineContextType {
  canvasRef: CanvasRef;

  generateQrFromText: (
    text: string,
    colorAndShape: ColorAndShapeOptions,
    image: ImageOptions,
    quality: QualityOptions,
  ) => void;
  refreshCanvas: () => void;
  downloadSvg: () => void;
}

const GeneratorPipelineContext =
  createContext<GeneratorPipelineContextType | null>(null);

interface GeneratorProviderProps extends PropsWithChildren {
  canvasRef: CanvasRef;
}

export function GeneratorPipelineProvider({
  children,
  canvasRef,
}: GeneratorProviderProps) {
  const refreshCanvas = useRefreshCanvas(canvasRef);

  return (
    <GeneratorPipelineContext.Provider
      value={{
        canvasRef,
        generateQrFromText: useRenderCanvasFromtext(canvasRef, refreshCanvas),
        refreshCanvas: refreshCanvas,
        downloadSvg: useDownloadSvg(canvasRef),
      }}
    >
      {children}
    </GeneratorPipelineContext.Provider>
  );
}

export function useGeneratorPipelineContext() {
  const context = useContext(GeneratorPipelineContext);

  if (isNotDefined(context)) {
    throw new Error(
      'useGeneratorContext must be used inside GeneratorProvider',
    );
  }

  return context;
}
