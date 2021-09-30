import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    //console.log(props);
    return (
        <div className="product">
            <div className="images">
                <img src={img} alt="" />
            </div>
            <div className="product-information">
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={()=>props.handleAddProduct(props.product)}>add to cart</button>
            </div>
        </div>
    );
};

export default Product;