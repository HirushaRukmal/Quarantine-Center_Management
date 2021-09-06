import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Modal from "react-modal";
import React, { useState, useContext, useEffect } from "react";

import FoodComment from "./FoodComments";
import FoodDetails from "./FoodDetails";
import SendComment from "./SendComment";
import OrderContext from "./store/orderContext";
Modal.setAppElement("#root");

export default function FoodItem(props) {
  //getting access to the ordered context object in orderontext.js page
  const orderedCtx = useContext(OrderContext);
  const isOrderd = orderedCtx.isOrdered(props.id);
  const [modelOpen, setmodelOpen] = useState(false);
  const [comment, setComment] = useState([]);

  function toogleOrderStatusHandler() {
    if (isOrderd) {
      orderedCtx.removeOrder(props.id);
    } else {
      orderedCtx.addOrder({
        id: props.id,
        price: props.price,
        name: props.name,
        image: props.image,

        description: props.description,
      });
    }
  }

  // getting the required comments
  // functions regarding modal
  function modalOpen() {
    setmodelOpen(true);
    axios
      .get(`http://localhost:8000/comment/get/${props.id}`)
      .then((res) => {
        setComment(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }
  function modalClose() {
    setmodelOpen(false);
  }
  return (
    <div
      className="card"
      style={{
        width: "300px",
        maxHeight: "300px",
      }}
    >
      <img src={`images/${props.image}`} className="card-img-top" alt="..." />
      <div className="card-body">
        <center>
          <button onClick={modalOpen} className="btn btn-primary">
            Submit
          </button>
        </center>
      </div>

      <Modal
        animation={true}
        isOpen={modelOpen}
        onRequestClose={modalClose}
        style={{
          display: "flex",
          overlay: {
            backgroundColor: "black",
            opacity: "0.9",
          },
          content: {
            width: "800px",
            height: "450px",
            margin: "auto",
          },
        }}
      >
        <div className="row">
          <div
            className="model-header col-md-6"
            style={{
              overflowY: "initial",
            }}
          >
            <FoodDetails
              name={props.name}
              price={props.price}
              id={props.foodID}
              description={props.description}
              image={props.image}
            />
            <div className="row">
              <div className="col-md-5">
                <button
                  onClick={toogleOrderStatusHandler}
                  className="btn btn-primary"
                >
                  {isOrderd ? "Cancel order" : "Order now"}
                </button>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-5">
                <button onClick={modalClose} className="btn btn-primary">
                  Close
                </button>
              </div>
            </div>
          </div>
          <div className="model-body col-md-6">
            <div
              style={{
                height: "350px",
                overflowY: "scroll",
              }}
            >
              {comment.map((post) => (
                <div key={post._id}>
                  <FoodComment
                    userID={post.userID}
                    foodID={post.foodID}
                    comment={post.comment}
                  />
                </div>
              ))}
            </div>

            <SendComment foodID={props.id} />
          </div>
        </div>
      </Modal>
    </div>
  );
}
