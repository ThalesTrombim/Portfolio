import { createContext, useState } from 'react';

export const MobileMenuContext = createContext({})

export function MobileMenuProvider ({ children }) {
    const [ mobileMenu, setMobileMenu ] = useState(false);

    function toggleActive() {
        setMobileMenu(!mobileMenu)
    }

    return (
       <MobileMenuContext.Provider value={{ mobileMenu, toggleActive }}>
           { children }
       </MobileMenuContext.Provider> 
    )
}