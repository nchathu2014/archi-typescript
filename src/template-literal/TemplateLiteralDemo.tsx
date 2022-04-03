import { FC } from "react";

type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

interface ToastPosition {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
}

export const TemplateLiteralDemo: FC<ToastPosition> = ({
  position,
}: ToastPosition) => {
  return (
    <div>
      <h2>Template Literal</h2>
    </div>
  );
};
