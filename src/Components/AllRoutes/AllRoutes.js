import React from 'react'
import{Routes, Route} from "react-router-dom";

import Home from '../Home/home';
import Projects from '../Projects/projects';
import Birth from '../Projects/Projects Components/Birthday Reminder/Birth';
import CartApp from '../Projects/Projects Components/Cart/CartApp';
import CocktailApp from '../Projects/Projects Components/Cocktail/CocktailApp';
import ColorGenerator from '../Projects/Projects Components/Color Generator/ColorGenerator';
import GroceryBud from '../Projects/Projects Components/Grocery Bud/GroceryBud';
import LoremIpsum from '../Projects/Projects Components/Lorem Ipsum/LoremIpsum';
import MenuApp from '../Projects/Projects Components/Menu/MenuApp';
import Navbar2 from '../Projects/Projects Components/Navbar/Navbar2';
import Questions from '../Projects/Projects Components/Questions/questions';
import Reviews from '../Projects/Projects Components/Reviews/reviews';
import SidebarApp from '../Projects/Projects Components/Sidebar Modal/SidebarApp';
import Slider from '../Projects/Projects Components/Slider/Slider';
import StripeApp from '../Projects/Projects Components/Stripe Menu/StripeApp';
import Tabs from '../Projects/Projects Components/Tabs/Tabs';
import ToursApp from '../Projects/Projects Components/Tours/toursApp';
import ProjectsApp from '../Projects/ProjectsApp';
import SingleCocktail from '../Projects/Projects Components/Cocktail/pages/SingleCocktail';

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsApp />} />
            <Route path="/birthday" element={<Birth/>} />
            <Route path="/tours" element={<ToursApp />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/menu" element={<MenuApp />} />
            <Route path="/tabs" element={<Tabs />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="/lorem" element={<LoremIpsum />} />
            <Route path="/colorGenerator" element={<ColorGenerator />} />
            <Route path="/groceryBud" element={<GroceryBud />} />
            <Route path="/navbar2" element={<Navbar2 />} />
            <Route path="/sidebarModal" element={<SidebarApp />} />
            <Route path="/stripeMenu" element={<StripeApp />} />
            <Route path="/cart" element={<CartApp />} />
            <Route path="/cocktail" element={<CocktailApp />} />
            {/*Go to single cocktail*/}
            <Route path="/cocktail/:id" element={<SingleCocktail />} />
        </Routes>
    )
}

export default AllRoutes;
