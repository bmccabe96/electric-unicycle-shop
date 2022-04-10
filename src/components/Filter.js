import { mdiFilterPlus } from "@mdi/js";
import React, { useState } from "react";
import "../styles/filter.css";

const Filter = (props) => {

  const products = props.products;
  const filterList = props.filterList;
  const setItems = props.setItems;
  let types = props.products.map(product => product.type);
  function getUniqueArray(_array) {
    let newArray = _array.filter((element, index, array) => array.indexOf(element) === index);
    return newArray
  }
  types = getUniqueArray(types);

  return (
      <div className="filter-buttons">
        {types.map((type, id) => {
          return (
            <button
              onClick={() => filterList(type)}
              key={id}
              className="filter-button"
            >
              {type}
            </button>
          );
        })}
        <button
          onClick={() => setItems(products)}
          className="filter-button"
        >
          All
        </button>
      </div>
  );

}

export default Filter;

