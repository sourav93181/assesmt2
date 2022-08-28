import React, { useEffect, useState } from "react";
import { Card } from "../../../components";
import getRealmeimg from "../../../api/realmeapi/realme";
import "./style.css";
export default function MobileScreen(props) {
  const { addClickAction1, removeClickAction1, searching ,detailing,handleproduct,quant,handledecrese,handleincrese} = props;
  const [listOfObject, setlistOfObject] = useState([]);
  useEffect(() => {
    setlistOfObject(getRealmeimg());
  }, []);
  return (
    <div className="mobile-section-container">
      <div className="section-m-con1">
        <h3>Realme</h3>
        <div className="horizonal-scrolling">
          {(searching.length === 0
            ? listOfObject
            : listOfObject.filter((item) => item.item2.includes(searching))
          ).map((item) => {
            return (
              <Card
                itemImages={item.item1}
                itemNames={item.item2}
                itemDesc={item.item3}
                itemquant={quant.find((it) => it.id === item.id).quantity}
                addClickAction={addClickAction1}
                removeClickAction={removeClickAction1}
                thatitem={item}
                detailing={detailing}
                handleproduct1={handleproduct}
                handledecrese={handledecrese}
                handleincrese={handleincrese}
              />
            );
          })}
        </div>
      </div>

      <div className="section-m-con1">
        <h3>oppo</h3>
        <div className="horizonal-scrolling">
          {(searching.length === 0
            ? listOfObject
            : listOfObject.filter((item) => item.item2.includes(searching))
          ).map((item) => {
            return (
              <Card
                itemImages={item.item1}
                itemNames={item.item2}
                itemDesc={item.item3}
                itemquant={quant.find((it) => it.id === item.id).quantity}
                addClickAction={addClickAction1}
                removeClickAction={removeClickAction1}
                thatitem={item}
                detailing={detailing}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
