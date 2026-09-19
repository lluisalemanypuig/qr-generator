import {
  QRColorAndShapeOptions,
  QRColorAndShapeOptionsState,
} from '@workbench/context/color-and-shape';
import { QRImageOptions, QRImageOptionsState } from '@workbench/context/image';
import {
  QRQualityOptions,
  QRQualityOptionsState,
} from '@workbench/context/quality';
import { ECC } from '@workbench/enums/quality';
import {
  AlignmentShape,
  ImageBackgroundShape,
  PointShape,
} from '@workbench/enums/shapes';
import { createContext, ReactNode, useContext } from 'react';

interface QRGeneratorContextType {
  colorAndShape: QRColorAndShapeOptions;
  setFillColor: (color: string) => void;
  setBorderColor: (color: string) => void;
  setPointShape: (shape: PointShape) => void;
  setAlignmentShape: (shape: AlignmentShape) => void;

  image: QRImageOptions;
  setImage: (image: string | undefined) => void;
  setImageSize: (size: number) => void;
  setBackgroundShape: (shape: ImageBackgroundShape) => void;
  setBackgroundColor: (backgroundColor: string) => void;
  setBackgroundBorderColor: (backgroundBorderColor: string) => void;
  setBackgroundSize: (size: number) => void;

  quality: QRQualityOptions | undefined;
  setECC: (ecc: ECC) => void;

  generateQR: () => void;
}

const QRGeneratorContext = createContext<QRGeneratorContextType | null>(null);

export function QRGeneratorProvider({ children }: { children: ReactNode }) {
  const {
    options: colorAndShapeOptions,
    setFillColor,
    setBorderColor,
    setPointShape,
    setAlignmentShape,
  } = QRColorAndShapeOptionsState();

  const {
    options: imageOptions,
    setImage,
    setImageSize,
    setBackgroundShape,
    setBackgroundColor,
    setBackgroundBorderColor,
    setBackgroundSize,
  } = QRImageOptionsState();

  const { options: qualityOptions, setECC } = QRQualityOptionsState();

  const generateQR = () => {
    console.log('Generating QR');
  };

  return (
    <QRGeneratorContext.Provider
      value={{
        colorAndShape: colorAndShapeOptions,
        setFillColor,
        setBorderColor,
        setPointShape,
        setAlignmentShape,
        image: imageOptions,
        setImage,
        setImageSize,
        setBackgroundShape,
        setBackgroundColor,
        setBackgroundBorderColor,
        setBackgroundSize,
        quality: qualityOptions,
        setECC,
        generateQR,
      }}
    >
      {children}
    </QRGeneratorContext.Provider>
  );
}

export function useQRGenerator() {
  const context = useContext(QRGeneratorContext);

  if (!context) {
    throw new Error('useQRGenerator must be used inside QRGeneratorProvider');
  }

  return context;
}
