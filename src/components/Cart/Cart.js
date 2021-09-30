import React from 'react';

const Cart = (props) => {
    const cart= props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let shipping =0;
    if(total<50 && total>0)
    {
        shipping=12.99;
    }
    else if(total>50)
    {
        shipping=4.99;
    }

    let tex =((total*2)/100).toFixed(2);
    let grandTotal=(total+shipping+Number(tex)).toFixed(2);
    return (
        <div>
            <h3>This is cart</h3>
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length}</p>
            <h4>Product price: {total}</h4>
            <h5>Shipping cost: {shipping}</h5>
            <p><small>Tax+VAT: {tex}</small></p>
            <h4>total price: {grandTotal}</h4>
        </div>
    );
};

export default Cart;