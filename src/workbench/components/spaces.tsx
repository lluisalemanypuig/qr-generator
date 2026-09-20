interface Props {
  height?: string;
}

export function VerticalSpace({ height = '8px' }: Props) {
  return <div style={{ height }} />;
}
