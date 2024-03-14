import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrums';
import Productdisplay from '../components/Productdisplay/productdisplay';
import DescriptionBox from '../components/description/descriptionBox';
import Relatedproduct from '../components/RelatedProduct/relatedproduct';


export default function Product() {
    const { all_product } = useContext(ShopContext);
    const { product_id } = useParams();
    const product = all_product.find((e) => e.id === Number(product_id)); // Use an arrow function here

    return (
        <div>
            <Breadcrum product ={product}/>
            <Productdisplay product ={product}/>
            <DescriptionBox/>
            <Relatedproduct/> 
        </div>
    );
}
