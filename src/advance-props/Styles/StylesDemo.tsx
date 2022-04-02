import { FC } from "react";

interface IStylesDemo {
  styles: React.CSSProperties;
}
export const StylesDemo: FC<IStylesDemo> = ({ styles }: IStylesDemo) => {
  return (
    <div style={{ ...styles }}>
      <h1>I am a Component</h1>
    </div>
  );
};
