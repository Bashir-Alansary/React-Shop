import React, { useState, useContext } from "react";

const SidebarContext = React.createContext();
const SidebarProvider = SidebarContext.Provider;

export const useGlobalContext = () => {
    return useContext(SidebarContext);
}

export{SidebarContext, SidebarProvider};