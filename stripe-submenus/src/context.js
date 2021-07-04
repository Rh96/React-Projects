import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSideBarOpen] = useState(true);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

    const openSideBar = () => {
        setIsSideBarOpen(true)
    }
    const closeSideBar = () => {
        setIsSideBarOpen(false)
    }

    const openSubmenu = () => {
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return <AppContext.Provider 
    value={{
        isSidebarOpen, 
        isSubmenuOpen,
        openSideBar,
        openSubmenu, 
        closeSubmenu, 
        closeSideBar
    }}>
    {children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}