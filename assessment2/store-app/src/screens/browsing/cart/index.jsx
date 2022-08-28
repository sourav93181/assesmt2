import React from "react";
import "./style.css";
import { Card } from "../../../components";
export default function Cart(props) {

  const { quant,addClickAction, removeClickAction, searching ,detailing,cartItems,handledecrese,handleincrese,handleproduct } = props;


  return (
    <div className="">
      {(cartItems.length === 0 ?
        <p>No items in cart</p>
        : cartItems.map((item) => {
          return (
            <Card
              itemImages={item.item1}
              itemNames={item.item2}
              itemDesc={item.item3}
              itemquant={quant.find((it) => it.id === item.id).quantity}
              addClickAction={addClickAction}
              removeClickAction={removeClickAction}
              thatitem={item}
              detailing={detailing}
              handleproduct1={handleproduct}
              handledecrese={handledecrese}
              handleincrese={handleincrese}
            />
          );
        })
          
     
      )}
    </div>
  );
}

{/*<div key={item.id} className="shop-item-container">
            <img src={item.item1} alt="#" className="item-img" />
            <div>{item.item2}</div>
            <div>
              <button onClick={()=>
                handleproduct(item)
              }>-</button>
              <button  onClick={()=>
                handleproduct(item)
              }>+</button>
            </div>*/}