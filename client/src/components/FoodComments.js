import "bootstrap/dist/css/bootstrap.css";
import "./ui/Form.css";
import React, { useState } from "react";
import axios from "axios";
import uniqid from "uniqid";

export default function DisplayComments(props) {
  return (
    <div>
      <div className="row shadow-lg p-3 mb-2 bg-grey rounded">
        <h6>
          {props.userID} : {props.comment}
        </h6>
      </div>
    </div>
  );
}
