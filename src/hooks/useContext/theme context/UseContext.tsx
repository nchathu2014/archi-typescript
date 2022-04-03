import { FC, createContext } from "react";
import { theme } from "./theme";

interface IThemeContext {
  children: React.ReactNode;
}

export const AppThemeContext = createContext(theme);

export const ThemeContext: FC<IThemeContext> = (props: IThemeContext) => {
  return (
    <AppThemeContext.Provider value={theme}>
      {props.children}
    </AppThemeContext.Provider>
  );
};
