import React, { useState } from "react";
import "./style.css";

export default function ProductSpecific(props) {
  const [val, setval] = useState(0);
  const {
    title = "Product Name",
    descrip = "this is the product description",
    pricing = "$200",
    parimg,
    addClickAction,
    removeClickAction,
  } = props;
  return (
    <div className="product-specific">
      <img src={parimg} alt="" className="separate-img1" />
      <img src={parimg} alt="" className="separate-img2" />
      <img src={parimg} alt="" className="separate-img3" />
      <img src={parimg} alt="" className="separate-full-img" />
      <p className="product-name"> {title}</p>
      <p className="product-detail">{descrip}</p>
      <p className="product-price">{pricing}</p>
      {val < 1 ? (
        <span
          className="item-add-cart"
          onClick={() => {
            setval(val + 1);
            addClickAction();
          }}
        >
          Click To Add
        </span>
      ) : (
        <span className="item-cart">
          <p
            className="item-remove-button"
            onClick={() => {
              setval(val - 1);

              removeClickAction();
            }}
          >
            -
          </p>
          <p className="item-quantity">{val}</p>
          <p
            className="item-add-button"
            onClick={() => {
              setval(val + 1);
              addClickAction();
            }}
          >
            +
          </p>
        </span>
      )}
    </div>
  );
}
