import React, { useEffect, useState, createContext } from "react";
import { DarkTheme } from "./Themes";
import { MuiThemeProvider } from "@material-ui/core/styles";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const getInitialMode = () => {
        if (typeof localStorage === "undefined") return true;
        const isReturningUser = "dark" in localStorage;
        const savedMode = JSON.parse(localStorage.getItem("dark"));
        const userPrefersDark = getPrefColorScheme();
        if (isReturningUser) {
            return savedMode;
        }
        return !!userPrefersDark;
    };

    const getPrefColorScheme = () => {
        if (!window.matchMedia) return;

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    };

    const [theme, setTheme] = useState(getInitialMode() ? "dark" : "dark");

    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("dark");
        } else {
            setTheme("dark");
        }
    };

    useEffect(() => {
        typeof localStorage !== "undefined" &&
            localStorage.setItem("dark", JSON.stringify(theme === "dark"));
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            <MuiThemeProvider
                theme={theme === "dark" ? DarkTheme : DarkTheme}
            >
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
