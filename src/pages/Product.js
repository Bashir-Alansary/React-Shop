import React from 'react'
import "./CSS/Product.css"
import { useParams } from 'react-router-dom';
import ProductImgs from '../components/ProductImgs/ProductImgs';
import ProductAbout from '../components/ProductAbout/ProductAbout';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import { useShopContext } from '../Context/ShopContext';
import ProductRelated from '../components/ProductRelated/ProductRelated';

export default function Product() {
  
  const {all_product} = useShopContext();
  const {productId} = useParams();
  const product = all_product.find(item => item.id === Number(productId)); 

  return (
    <div className='product'>
     <div className='container'>
        <div className='content'>
          <ProductImgs product = {product} />
          <ProductDetails product = {product} />
        </div>
        <ProductAbout product = {product} />
        <ProductRelated />
     </div>
    </div>
  )
}
