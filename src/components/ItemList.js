import React from "react";
import { Item } from "./Item";
import Filter from "./Filter";

const ItemList = (props) => {
  const items = props.items;
  const handleAddToCart = props.handleAddToCart;
  const filterList = props.filterList;
  const setItems = props.setItems;
  const products = props.products;

  return (
    <div>
      <Filter filterList={filterList} items={props.items} setItems={setItems} products={products}/>
      <div className="page-content item-list">
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
    </div>
  )
}

export default ItemList;