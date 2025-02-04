import { useState } from 'react';
import { createContext } from 'react';

export const SideBarContext = createContext();

// eslint-disable-next-line react/prop-types
export const SideBarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <SideBarContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </SideBarContext.Provider>
    );
};
