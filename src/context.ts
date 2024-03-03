import { Dispatch, SetStateAction, createContext } from "react";

// Theme context, default to light theme
export const ThemeContext = createContext<{ theme: string;  setTheme: Dispatch<SetStateAction<string>>}>({
    theme: "light",
    setTheme: () => {},
});


