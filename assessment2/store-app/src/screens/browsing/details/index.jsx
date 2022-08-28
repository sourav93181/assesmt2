import React, { useEffect, useState } from "react";
import { Card, ProductDetail } from "../../../components";
import { getBrowsingData } from "../../../api/browsingApi";
import "./style.css";

export default function Detail(props) {
  const { title1 ,addClickActionpart, removeClickActionpart, searching,detailing,handleproduct} = props;

  const [listOfObject, setlistOfObject] = useState([]);
  useEffect(() => {
    setlistOfObject(getBrowsingData());
  }, []);
  return (
    <div className="product-detail">
      <ProductDetail
        title={title1.item2}
        descrip={title1.item3}
        pricing={title1.price}
        parimg={title1.item1}
        addClickAction={addClickActionpart}
        removeClickAction={removeClickActionpart}
      />
      <p>Suggestion</p>
      <div className="Product-Window">
        {(searching.length === 0
          ? listOfObject
          : listOfObject.filter((item) => item.item2.includes(searching))
        ).map((item) => {
          return (
            <Card
              itemImages={item.item1}
              itemNames={item.item2}
              itemDesc={item.item3}
              addClickAction={addClickActionpart}
              removeClickAction={removeClickActionpart}
              thatitem={item}
              detailing={detailing}
              handleproduct1={handleproduct}
            />
          );
        })}
      </div>
    </div>
  );
}
