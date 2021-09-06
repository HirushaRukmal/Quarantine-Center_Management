import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodCard from "./FoodCard";

export default function OrderDetails(props) {
  const [foodDetails, setFoodDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/orderdetails/getbyorderdetailsid/${props.id}`)
      .then((res) => {
        setFoodDetails(res.data);
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
          {foodDetails.map((post) => (
            <div key={post.orderID}>
              <FoodCard
                foodid={post.foodID}
                orderid={post.orderID}
                price={post.price}
                status={post.status}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
