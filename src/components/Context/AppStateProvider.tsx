import { createContext, ReactNode } from "react";

const defaultContext = {
    test: "test"
}

export const AppStateContext = createContext(defaultContext);



// export const AppStateProvider = () => (
export const AppStateProvider = ({children} : {children: ReactNode}) => (
    <AppStateContext.Provider value={defaultContext}>
        {children}
    </AppStateContext.Provider>
)