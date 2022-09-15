import { createContext, ReactNode } from "react";

export const AppThemes = {
  light: {
    primary: "crimson",
    secondary: "#F5F5F5",
    background: "#FFF",
    headingText: "#FFFFFF",
    bodyText: "#000000",
    tertiary: "#858585",
    barStyle: "dark-content",
  },
  dark: {
    primary: "#bd1134",
    secondary: "#454545",
    background: "#252525",
    headingText: "#FFFFFF",
    bodyText: "#FFFFFF",
    tertiary: "#858585",
    barStyle: "light-content",
  },
};

const defaultContext = {
  colours: AppThemes.light,
};

export const AppStateContext = createContext(defaultContext);

// export const AppStateProvider = () => (
export const AppStateProvider = ({ children }: { children: ReactNode }) => (
  <AppStateContext.Provider value={defaultContext}>
    {children}
  </AppStateContext.Provider>
);
