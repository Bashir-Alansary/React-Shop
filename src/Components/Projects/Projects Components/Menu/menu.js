import React from 'react';
import {BsImage} from "react-icons/bs";

function Menu({menuItems}) {
    return (
        <section className='boxes-content'>
            {
               menuItems.map((menuItem) => {
                   const{id, title, desc, price, img} = menuItem;
                   return(
                    <article key={id} className="menu-box">
                        <div className='img-box'>
                            <div className='overlay'>
                                <button className='view-info'><BsImage /></button>
                            </div>
                            <img src={img} alt={title} />
                        </div>
                        <div className='txt-box'>
                            <header>
                                <h4>{title}</h4>
                                <h4 className='price'>{price}</h4>
                            </header>
                            <p className='desc'>{desc}</p>
                        </div>
                    </article>
                   )
               })
            }
        </section>
    )
}

export default Menu;
