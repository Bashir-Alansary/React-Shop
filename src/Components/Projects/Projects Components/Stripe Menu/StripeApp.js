import React from 'react';
import PageHead from "../../../PagesHead/pagesHead";
import Hero from './Hero';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SubMenu from './Submenu';
import {StripeProvider} from "./context";
import "./style.css";
function StripeApp() {
  return (
        <StripeProvider>
        <PageHead title="Stripe Menu" />
        <div className='stripe'>
          <Navbar />
          <Sidebar />
          <Hero />
          <SubMenu />
        </div>
        </StripeProvider>
  )
}

export default StripeApp;