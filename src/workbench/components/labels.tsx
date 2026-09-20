interface LabelLeftAlignedProps {
  text: string;
}

export function LabelLeftAligned({ text }: LabelLeftAlignedProps) {
  return <label style={{ textAlign: 'left' }}>{text}</label>;
}
