import React, { useState } from 'react';
import PageHead from "../../../PagesHead/pagesHead";
import SidebarHome from './SidebarHome';
import Modal from './Modal';
import Sidebar from './Sidebar';
import { SidebarProvider } from './context';
import './style.css';

function SidebarApp() {
  const[isSidebarOpen, setIsSidebarOpen] = useState(false);
  const[isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <SidebarProvider value={{
      isSidebarOpen,
      isModalOpen,
      openSidebar,
      openModal,
      closeSidebar,
      closeModal,
    }}>
        <PageHead title="Sidebar Modal" />
        <div className='sidebar-app'>
          <div className='container'>
            <SidebarHome />
            <Modal />
            <Sidebar />
          </div>
        </div>
    </SidebarProvider>
  )
}

export default SidebarApp;
