import React from "react";
import { Item } from "./Item";

const ItemList = (props) => {
  const items = props.items;
  const handleAddToCart = props.handleAddToCart;

  console.log(items);

  return (
    <div>
      {items.map(item => {
        return <Item 
          name={item.name}
          type={item.type}
          price={item.price}
          imgs={item.imgs}
          id={item.id}
          key={item.id}
          handleAddToCart={handleAddToCart}
        />
      })}
    </div>
  )
}

export default ItemList;