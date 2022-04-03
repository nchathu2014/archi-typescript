import { FC, useContext } from "react";
import { AppThemeContext } from "./UseContext";

export const Box: FC = () => {
  const theme = useContext(AppThemeContext);
  return (
    <div
      style={{ background: theme.secondary.main, color: theme.secondary.text }}
    >
      <h1>Box</h1>
    </div>
  );
};
