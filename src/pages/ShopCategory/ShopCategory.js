import React from 'react'
import all_product from '../../components/Assets/all_product'
import Item from '../../components/Item/Item'
import Banner from '../../components/Banner/Banner'
import "./ShopCategory.css"

export default function ShopCategory({category, img}) {
  return (
    <div className='shop-category'>
        <Banner img={img} title={"For " + category} />
        <div className='container'>
            <div className='content'>
                {
                    all_product.map(item => {
                    if(category === item.category) {
                            return(
                                <Item key={item.id} {...item} />
                            )
                    } else {
                        return null;
                    }
                    })
                }
            </div>
        </div>
    </div>
  )
}
