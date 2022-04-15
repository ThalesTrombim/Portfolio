import { createContext, useState } from 'react';

export const ThemeContext = createContext({})

export function ThemeProvider({ children }) {
    const [ theme, setTheme ] = useState('dark');

    function handleTheme() {
        if(theme === 'dark'){
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return (
       <ThemeContext.Provider value={{ theme, handleTheme }}>
           { children }
       </ThemeContext.Provider> 
    )
}