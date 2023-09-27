import React from 'react';

const CartWidget = () => {
    const itemCount = 6;
    return (
        <div className="d-flex align-items-center ">
            <img className='' src="./src/assets/carrito-de-compras.png" alt="" width="50" />
            <p  >{itemCount}</p>
        </div>
    );
};

export default CartWidget;
