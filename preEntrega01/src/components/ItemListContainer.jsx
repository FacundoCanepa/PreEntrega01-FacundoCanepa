import React from 'react';

const ItemListContainer = (productos) => {
    return (    
        <>
        <div>lista de productos</div>
        <ul>
            <li>{productos.name}</li>
        </ul>
        </>
    );
};

export default ItemListContainer;
