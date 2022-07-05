import React, {useContext, useState} from "react";
import sublinks from "../../../../Data/stripeData";

const StripeContext = React.createContext();

export const StripeProvider = ({children}) => {
    const[isSidebarOpen, setIsSidebarOpen] = useState(false);
    const[isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState();
    const [page, setPage] = useState({ page: '', links: [] });

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find(link => link.page === text);
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
  };

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }
    return  <StripeContext.Provider value={{
                isSidebarOpen,
                isSubmenuOpen,
                openSidebar,
                closeSidebar,
                openSubmenu,
                closeSubmenu,
                location,
                page
                }}>
                {children}
            </StripeContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(StripeContext);
}