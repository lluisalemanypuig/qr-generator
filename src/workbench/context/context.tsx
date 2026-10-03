import { isNotDefined } from '@utils/defined';
import { CanvasRef } from '@utils/types';
import { useDownloadSvg } from '@workbench/context/actions/download';
import { ColorAndShapeProvider } from '@workbench/context/color-shape';
import { ImageProvider } from '@workbench/context/image';
import { QualityProvider } from '@workbench/context/quality';
import { TextProvider } from '@workbench/context/text';
import { createContext, PropsWithChildren, useContext } from 'react';
import { useRefreshCanvas, useRenderCanvasFromtext } from './actions/render';

interface GeneratorContextType {
  canvasRef: CanvasRef;

  generateQrFromText: (t: string) => void;
  refreshCanvas: () => void;
  downloadSvg: () => void;
}

const GeneratorContext = createContext<GeneratorContextType | null>(null);

interface GeneratorProviderProps extends PropsWithChildren {
  canvasRef: CanvasRef;
}

function GeneratorProvider({ children, canvasRef }: GeneratorProviderProps) {
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

interface GeneratorProps extends PropsWithChildren {
  canvas: CanvasRef;
}

export function Generator({ children, canvas }: GeneratorProps) {
  return (
    <GeneratorProvider canvasRef={canvas}>
      <TextProvider>
        <ColorAndShapeProvider>
          <ImageProvider>
            <QualityProvider>{children}</QualityProvider>
          </ImageProvider>
        </ColorAndShapeProvider>
      </TextProvider>
    </GeneratorProvider>
  );
}
