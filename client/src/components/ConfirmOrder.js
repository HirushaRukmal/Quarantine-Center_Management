import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import uniqid from "uniqid";
import DateTimePicker from "react-datetime-picker";
import "react-datepicker/dist/react-datepicker.css";

export default function ConfirmOrder(props) {
  const [instructions, setInstruction] = useState("");
  const [deliveryDate, setDeliveryDate] = useState();

  const totalPrice = props.order.reduce(
    (previousPrice, currentPrice) => previousPrice + currentPrice.price,
    0
  );

  async function confirmOrder(e) {
    e.preventDefault();
    const newOrder = {
      orderID: uniqid(),
      patientID: "102",
      orderDate: new Date(),
      total: totalPrice,
      instructions,
      deliveryDate,
      status: 1,
    };

    try {
      let res1 = await axios.post("http://localhost:8000/order/", newOrder);
      if (res1 == 200) {
        console.log("order added");
      }
    } catch (err) {
      alert(err);
      alert(err.message);
    }

    // axios
    //   .get("http://localhost:8000/order/getlastorder")
    //   .then((res) => {
    //     setorderid(res.data);
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });
    getData();
  }

  async function getData() {
    try {
      let res = await axios({
        url: "http://localhost:8000/order/getlastorder",
        method: "get",
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status == 200) {
        // test for status you want, etc
        alert("order added");

        props.func(res.data);
      }
      // Don't forget to return something
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="card-header">
            <h4 className="card-title">
              Do you have any special instructions?
            </h4>
            <textarea
              cols="80"
              onChange={(e) => {
                setInstruction(e.target.value);
              }}
            />

            <h4 className="card-title">Select the delivery date</h4>
            <DateTimePicker onChange={setDeliveryDate} value={deliveryDate} />
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">Delivery Details</div>
            <div className="card-header">
              <h4 className="card-title">Special title treatment</h4>
              <p className="card-text">
                For your convinience you may want to print out a recipt.
              </p>
              <h5>Delivery for,</h5>
              <p className="card-text">
                Patient ID : 101 <br />
                Name : Akila <br />
                Room-No : 202
              </p>

              <h4>Total price : Rs.{totalPrice}.00</h4>
              <button className="btn btn-primary" onClick={confirmOrder}>
                Confirm order
              </button>
            </div>
            <div className="card-footer text-muted">
              Have Questions about your order? <br /> <a href="#">Contact us</a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
