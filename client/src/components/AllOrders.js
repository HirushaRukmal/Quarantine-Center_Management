import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderDetails from "./OrderDetails";

export default function AllOrders() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/order/getbypatient/102")
      .then((res) => {
        setFood(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);
  return (
    <div>
      <div className="row">
        <div
          style={{
            display: "flex",
            overflowX: "auto",
          }}
        >
          {food.map((post) => (
            <div key={post.orderID}>
              <OrderDetails id={post.orderID} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
