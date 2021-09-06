import { useContext, useState } from "react";
import uniqid from "uniqid";
import axios from "axios";
import OrderContext from "./store/orderContext";
import OrderedList from "./OrderedList";
import ConfirmOrder from "./ConfirmOrder";
import Modal from "react-modal";

export default function FoodCart() {
  const orderedCtx = useContext(OrderContext);
  const [date1, setDate] = useState();

  const [modelOpen, setmodelOpen] = useState(false);
  const [price, setPrice] = useState("");

  let orderid;
  let fid;
  let p1;
  let content;

  function addOrder(orderid) {
    {
      orderid.map((post) => (orderid = post.orderID));

      orderedCtx.orders.map((post) => {
        fid = post.id;
        p1 = post.price;

        const orderDetails = {
          orderDetailID: uniqid(),
          foodID: fid,
          price: p1,
          orderID: orderid,
          status: 1,
        };

        axios
          .post("http://localhost:8000/orderdetails/", orderDetails)
          .then(() => {})
          .catch((err) => {
            alert(err.message);
            alert("Food didnt ordered");
          });
      });
    }

    setmodelOpen(true);
  }

  function modalClose() {
    setmodelOpen(false);
    window.location.reload();
  }
  if (orderedCtx.totalOrders === 0) {
    content = <h5>You dont have any orders yet. </h5>;
  } else {
    content = <OrderedList order={orderedCtx.orders} />;
  }

  return (
    <div>
      <h1>My orders</h1>
      <div className="row">
        <div className="col-md-6">{content}</div>

        <div className="col-md-6">
          <ConfirmOrder func={addOrder} order={orderedCtx.orders} />
        </div>
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
          <div className="col">
            <h4 className="card-title d-flex justify-content-center">
              Quarentine Center Management
            </h4>
            <h5 className="card-title">Contact Number: 011-2289485</h5>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h5 className="card-title">Bill number: {orderid} </h5>
          </div>
          <div className="col-md-6">
            <h5 className="card-title">Ordered date: {date1} </h5>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <h5 className="card-title">Food Item</h5>
          </div>
          <div className="col-md-6">
            <h5 className="card-title">Price </h5>
          </div>
        </div>
        {orderedCtx.orders.map((post) => {
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title">{post.foodID}</h5>
            </div>
            <div className="col-md-6">
              <h5 className="card-title">{post.price} </h5>
            </div>
          </div>;
        })}
        asdas dasdsa dasdas dsadas
        <button onClick={modalClose} className="btn btn-primary">
          Close
        </button>
      </Modal>
    </div>
  );
}
