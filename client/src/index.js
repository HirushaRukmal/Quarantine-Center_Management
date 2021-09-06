import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//wrapped in curly braces because I dont need the default export. I only need the named export
import { OrderContextProvider } from "./components/store/orderContext";
ReactDOM.render(
  <OrderContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </OrderContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
