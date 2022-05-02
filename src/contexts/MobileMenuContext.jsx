import { createContext, useState } from 'react';

export const MobileMenuContext = createContext({})

export function MobileMenuProvider ({ children }) {
    const [ mobileMenu, setMobileMenu ] = useState(false);

    function toggleActive() {
        if(mobileMenu){
            setMobileMenu(false);
        }
    }

    return (
       <MobileMenuContext.Provider value={{ mobileMenu, setMobileMenu, toggleActive }}>
           { children }
       </MobileMenuContext.Provider> 
    )
}