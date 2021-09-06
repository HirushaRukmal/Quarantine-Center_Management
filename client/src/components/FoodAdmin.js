import React, { Component } from "react";
import ReactDOM from "react-dom";
const $ = require("jquery");
$.DataTable = require("datatables.net");
const columns = [
  { title: "Name", data: "name" },
  { title: "Position", data: "position" },
  { title: "Office", data: "office" },
  { title: "Extn.", data: "ext" },
  { title: "Start date", data: "date" },
  { title: "Salary", data: "salary" },
];
class FoodAdmin extends Component {
  render() {
    return (
      <div>
        <p>asdas</p>
        <table
          className="table table-borderless display"
          id="dataTable"
          width="100%"
          cellSpacing="0"
          ref={(el) => (this.el = el)}
        />
      </div>
    );
  }
}
export default FoodAdmin;
