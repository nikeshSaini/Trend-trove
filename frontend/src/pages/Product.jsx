import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';

export default function Product() {
    const { all_product } = useContext(ShowContext);
    const { product_id } = useParams();
    const product = all_product.find((e) => e.id === Number(product_id));

    return (
        <div>
            <h1>kcdlsdh</h1>
        </div>
    );
}
