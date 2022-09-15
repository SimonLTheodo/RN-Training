import { createContext, ReactNode, useState } from "react";

export const AppThemes = {
  light: {
    primary: "crimson",
    switch: "#d35b73",
    secondary: "#F5F5F5",
    background: "#FFF",
    headingText: "#FFFFFF",
    bodyText: "#000000",
    tertiary: "#858585",
    barStyle: "dark-content",
  },
  dark: {
    primary: "#bd1134",
    switch: "#d35b73",
    secondary: "#454545",
    background: "#252525",
    headingText: "#FFFFFF",
    bodyText: "#FFFFFF",
    tertiary: "#858585",
    barStyle: "light-content",
  },
};

let defaultContext = {
  colours: AppThemes.light,
  setColours: (val: boolean) => {},
};
export const AppStateContext = createContext(defaultContext);

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(AppThemes.light);
  return (
    <AppStateContext.Provider
      value={{
        colours: theme,
        setColours: (val) => {
          val ? setTheme(AppThemes.light) : setTheme(AppThemes.dark);
        },
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
