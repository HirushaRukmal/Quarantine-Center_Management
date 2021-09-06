import React, { useState, useEffect } from "react";
import axios from "axios";

import FoodItem from "./FoodItem";

export default function AllFoods() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/foods/")
      .then((res) => {
        setFood(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <div className="row">
      <div
        style={{
          display: "flex",
          overflowX: "auto",
        }}
      >
        {food.map((post) => (
          <div key={post.foodID}>
            <FoodItem
              name={post.name}
              price={post.price}
              id={post.foodID}
              description={post.description}
              image={post.image}
            />
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          overflowX: "auto",
          marginTop: "40px",
        }}
      >
        {food.map((post) => (
          <div key={post.foodID}>
            <FoodItem
              key={post.foodID}
              name={post.name}
              price={post.price}
              id={post.foodID}
              description={post.description}
              image={post.image}
            />
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          overflowX: "auto",
          marginTop: "40px",
        }}
      >
        {food.map((post) => (
          <div key={post.foodID}>
            <FoodItem
              key={post.foodID}
              name={post.name}
              price={post.price}
              id={post.foodID}
              description={post.description}
              image={post.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
