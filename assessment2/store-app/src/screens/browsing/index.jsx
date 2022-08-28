import React, { useEffect, useState } from "react";
import { Card, NavBar } from "../../components";
import "./style.css";
import { getBrowsingData } from "../../api/browsingApi";
import { Route } from "react-router-dom";
import MobileScreen from "./mobileScreen";
import Detail from "./details";
import ClothScreen from "./clothesScreen";
import { Routes } from "react-router-dom";
import Cart from "./cart";

export default function Browsing(props) {
  const [cartval, setCartval] = useState(0);
  const [det, setdet] = useState();
  const [cartitem, setcartitem] = useState([]);
  const handleproduct = (product) => {
    const productexit = cartitem.find((item) => item.id === product.id);
    if (productexit) {
      setcartitem(
        cartitem.map((item) =>
          item.id === product.id
            ? { ...productexit }
            : item
        )
      );
    } else {
      setcartitem([...cartitem, { ...product}]);
    }
  };

  const detailing = (product) => {
    setdet(product);
  };
  const [quant, setquant] = useState([]);
  const handledecrese = (product) => {
    const productexit = quant.find((item) => item.id === product.id);
    if (productexit) {
      
      setquant(quant.map((item) =>
        item.id === product.id
          ? { ...productexit, quantity: (productexit.quantity===0)?productexit.quantity :productexit.quantity - 1} 
          : item
      ))
    }
  }
  const handleincrese = (product) => {
    const productexit = quant.find((item) => item.id === product.id);
    if (productexit) {
      setquant(
        quant.map((item) =>
          item.id === product.id
            ? { ...productexit, quantity: productexit.quantity + 1 }
            : item
        )
      );
    }
  };

  



function incrementCart() {
  setCartval(cartval + 1);
}
function decrementCart() {
  if (cartval > 0) {
    setCartval(cartval - 1);
  }
}
const [search, setSearch] = useState("");
const [listOfObject, setlistOfObject] = useState([]);
useEffect(() => {
  setlistOfObject(getBrowsingData());

}, []);

useEffect(() => {
  setquant(getBrowsingData());
}, []);
return (
  <div className="Browsing-Window">
    <NavBar
      sizeOfCart={cartval}
      onSearchChange={(val) => setSearch(val)}
      className="over"
    />
    <div className="loading-container">
      <Routes>
        <Route
          path="/"
          element={
            <div className="Product-Window">
              {(search.length === 0
                ? listOfObject
                : listOfObject.filter((item) => item.item2.includes(search))
              ).map((item) => {
                return (
                  <Card
                    itemImages={item.item1}
                    itemNames={item.item2}
                    itemDesc={item.item3}
                    itemquant={quant.find((it) => it.id === item.id).quantity}
                    addClickAction={incrementCart}
                    removeClickAction={decrementCart}
                    thatitem={item}
                    handleproduct1={handleproduct}
                    detailing={detailing}
                    handledecrese={handledecrese}
                    handleincrese={handleincrese}
                    quantum={quant}
                  />
                );
              })}
            </div>
          }
        />
        <Route
          path="/mobilescreen"
          element={
            <MobileScreen
              addClickAction1={incrementCart}
              removeClickAction1={decrementCart}
              searching={search}
              handleproduct={handleproduct}
              detailing={detailing}
              quant={quant}
              handledecrese={handledecrese}
              handleincrese={handleincrese}
            />
          }
        />
        <Route
          path="/clothscreen"
          element={
            <ClothScreen
              addClickActionCloth={incrementCart}
              removeClickActionCloth={decrementCart}
              searching={search}
              handleproduct={handleproduct}
              detailing={detailing}
              quant={quant}
              handledecrese={handledecrese}
              handleincrese={handleincrese}
            />
          }
        />
        <Route
          path="/detail"
          element={
            <Detail
              addClickActionpart={incrementCart}
              removeClickActionpart={decrementCart}
              searching={search}
              title1={det}
              detailing={detailing}
              handleproduct={handleproduct}
              quant={quant}
              handledecrese={handledecrese}
              handleincrese={handleincrese}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartitem}
              addClickAction={incrementCart}
              removeClickAction={decrementCart}
              searching={search}
              detailing={detailing}
              quant={quant}
              handledecrese={handledecrese}
              handleincrese={handleincrese}
            />
          }
        />
      </Routes>
    </div>
  </div>
);
}
