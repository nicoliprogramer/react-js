import ItemCount from '../ItemCount';
import React from 'react'

export const ItemListContainer = () => {

    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades `);
    }

    return (
        <>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </>
    )
}

export default ItemListContainer;