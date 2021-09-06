import "bootstrap/dist/css/bootstrap.css";
import React from "react";

export default function FoodDetails(props) {
  return (
    <div>
      <img src={`images/${props.image}`} className="card-img-top" alt="..." />

      <div className="row">
        <div className="col-md-3">
          <h5 className="card-title">Name</h5>
        </div>
        <div className="col-md-9">
          <p className="card-text">: {props.name}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <h5 className="card-title">Price</h5>
        </div>
        <div className="col-md-9">
          <p className="card-text">: Rs.{props.price}.00</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <h5 className="card-title">Description</h5>
        </div>
        <div className="col-md-9">
          <p className="card-text">: {props.description}</p>
        </div>
      </div>
    </div>
  );
}
