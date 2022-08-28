import React, { useEffect, useState } from "react";
import { Card } from "../../../components";
import getDenimimg from "../../../api/clothesdenimapi/denim";
import "./style.css";

export default function ClothesScreen(props) {
  const { addClickActionCloth, removeClickActionCloth, searching,detailing,handleproduct,handledecrese,handleincrese,quant } = props;
  const [listOfObject, setlistOfObject] = useState([]);
  useEffect(() => {
    setlistOfObject(getDenimimg());
  }, []);
  return (
    <div className="cloth-section-container">
      <div className="section-c-con1">
        <h3>Denim</h3>
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
                addClickAction={addClickActionCloth}
                removeClickAction={removeClickActionCloth}
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
        <h3>levis</h3>
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
                addClickAction={addClickActionCloth}
                removeClickAction={removeClickActionCloth}
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
