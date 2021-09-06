import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { useContext, useState } from "react";
import OrderContext from "./store/orderContext";

export default function Orders(props) {
  const orderedCtx = useContext(OrderContext);
  const isOrderd = true;

  function toogleOrderStatusHandler() {
    if (isOrderd) {
      orderedCtx.removeOrder(props.id);
    }
  }
  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: "650px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={`images/${props.image}`} className alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body" style={{ paddingLeft: "80px" }}>
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">Rs.{props.price}.00</p>
              <p className="card-text">{props.description}</p>

              <button
                onClick={toogleOrderStatusHandler}
                className="btn btn-primary"
              >
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
