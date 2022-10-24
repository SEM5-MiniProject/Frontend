import { createContext, useContext, useState } from "react";

export const UIContext = createContext({});
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showSearchBox, setShowSearchBox] = useState(false);
    const [showSignForm, setSignForm] = useState(false);
    const [showLoginForm, setLoginForm] = useState(false);
    const [showFirst, setFirst] = useState(false);
    const [showSellerAdd, setSellerAdd] = useState(false);


    const value = {
        drawerOpen,
        setDrawerOpen,
        showSearchBox, 
        setShowSearchBox,
        showSignForm,
        setSignForm,
        showLoginForm,
        setLoginForm,
        showFirst,
        setFirst,
        showSellerAdd, 
        setSellerAdd
    };

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}