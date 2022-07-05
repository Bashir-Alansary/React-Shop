import React, { useState } from 'react';
import PageHead from "../../../PagesHead/pagesHead";
import Categories from './categories';
import items from "../../../../Data/menuData";
import Menu from './menu';
import "./style.css";

const allCategories = ["all", ...new Set(items.map(item => item.category))];

function MenuApp() {
    const[menuItems, setMenuItems] = useState(items);
    const[categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if(category === 'all') {
            setMenuItems(items);
            return;
        }
        let newItems = items.filter((item) =>
            item.category === category
        )
        setMenuItems(newItems);
    }
    return(
        <main className='menu'>
            <PageHead title="Our Menu" />
            <section className='menu-content'>
                <Categories filterItems = {filterItems} allCategories={allCategories}/>
                <Menu menuItems={menuItems} />
            </section>
        </main>
    )
}

export default MenuApp;