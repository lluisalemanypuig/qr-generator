import { isNotDefined } from '@utils/defined';
import { CanvasRef } from '@utils/types';
import {
  useUpdateAlignmentShape,
  useUpdateBackgroundTransparency,
  useUpdateBorderColor,
  useUpdateFillColor,
  useUpdatePointShape,
} from '@workbench/actions/colors';
import { useDownloadSvg } from '@workbench/actions/download';
import {
  useGenerateCanvasFromtext,
  useRefreshCanvas,
} from '@workbench/actions/render';
import { Color } from '@workbench/enums/colors';
import { AlignmentShape, PointShape } from '@workbench/enums/shapes';
import { ColorAndShapeOptions } from '@workbench/options/color-shape';
import { ImageControl, ImageOptions } from '@workbench/options/image';
import { QualityOptions } from '@workbench/options/quality';
import { createContext, PropsWithChildren, useContext } from 'react';

interface GeneratorPipelineContextType {
  canvasRef: CanvasRef;

  generateQrFromText: (
    text: string,
    colorAndShape: ColorAndShapeOptions,
    imageControl: ImageControl,
    imageOptions: ImageOptions,
    quality: QualityOptions,
  ) => void;
  refreshCanvas: () => void;
  downloadSvg: () => void;

  updateFillColor: (c: Color) => void;
  updateBorderColor: (c: Color) => void;
  updatePointShape: (s: PointShape) => void;
  updateAlignmentShape: (s: AlignmentShape) => void;
  updateBackgroundTransparency: (t: boolean) => void;
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
        generateQrFromText: useGenerateCanvasFromtext(canvasRef, refreshCanvas),
        refreshCanvas: refreshCanvas,
        downloadSvg: useDownloadSvg(canvasRef),
        updateFillColor: useUpdateFillColor(canvasRef, refreshCanvas),
        updateBorderColor: useUpdateBorderColor(canvasRef, refreshCanvas),
        updatePointShape: useUpdatePointShape(canvasRef, refreshCanvas),
        updateAlignmentShape: useUpdateAlignmentShape(canvasRef, refreshCanvas),
        updateBackgroundTransparency: useUpdateBackgroundTransparency(
          canvasRef,
          refreshCanvas,
        ),
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
      'useGeneratorPipelineContext must be used inside GeneratorPipelineProvider',
    );
  }

  return context;
}
