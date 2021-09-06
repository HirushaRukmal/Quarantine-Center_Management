import classes from "./NavBar.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

import OrderContext from "../store/orderContext";
export default function NavBar() {
  const orderedCtx = useContext(OrderContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/allFood">All Food</Link>
          </li>
          <li>
            <Link to="/foodadmin">Admin Panel</Link>
          </li>
          <li>
            <Link to="/addFood">Add Food</Link>
          </li>
          <li>
            <Link to="/allOrders">Completed orders</Link>
          </li>
          <li>
            <Link to="/foodCart">
              Food Cart
              <span
                style={{
                  backgroundColor: "#cc2062",
                  color: "white",
                  borderRadius: "12px",
                  padding: "0 1rem",
                  marginLeft: "0.5rem",
                }}
              >
                {orderedCtx.totalOrders}
                {orderedCtx.totalPrice}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
