import React, { useState } from 'react';
import "./style.css"
import { useNavigate } from "react-router-dom";
import autodefault from "../../../assest/images/Nothing.jpg"
import { getBrowsingData } from '../../../api/browsingApi';
export default function Card(props) {
    let navigate = useNavigate();
    {/*const [val, setval] = useState(0);*/ }
    const { itemImages = autodefault, itemNames = "Nothing", itemDesc = "",itemquant="-11", addClickAction, removeClickAction,handleproduct1,thatitem,detailing,handledecrese,handleincrese } = props;


    return (
      <div className="shop-item-container">
        <img src={itemImages} alt="" className="item-img" />
        <p
          className="item-name"
          onClick={() => {
            navigate("/browsing/detail");
            detailing(thatitem);
          }}
        >
          {itemNames}
        </p>
        <p className="item-description">{itemDesc}</p>
        {/*
            {val < 1 ? <span className='item-add-to-cart' onClick={() => {
                setval(val + 1);
                addClickAction();
                handleproduct1(thatitem);
            }}>Click To Add</span> : <span className='item-in-cart'>
                <p className='item-remove-button' onClick={() => {
                    setval(val - 1);
                    removeClickAction()
                    handleproduct1(thatitem);
                }}>-</p>
                    <p className='item-quantity'>{val}0</p>
                <p className='item-add-button' onClick={() => {
                        setval(val + 1)
                    addClickAction();
                    handleproduct1(thatitem);
                }}>+</p>
            </span>} */}
        <span className='item-in-cart'>
        <p
          className="item-remove-button"
            onClick={() => {
              if (itemquant > 0) {
              removeClickAction();
              handledecrese(thatitem);
            }
            
              
          }}
        >
          -
        </p>
                <p className="item-quantity">{itemquant}</p>
        <p
          className="item-add-button"
          onClick={() => {
            addClickAction();
              handleproduct1(thatitem);
              handleincrese(thatitem);
          }}
        >
          +
                </p>
                </span>
      </div>
    );
}

