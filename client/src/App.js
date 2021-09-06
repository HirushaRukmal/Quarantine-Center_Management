import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllFood from "./components/AllFood";
import AddFood from "./components/AddFood";
import NavBar from "./components/ui/NavBar";
import FoodCart from "./components/FoodCart";
import AllOrders from "./components/AllOrders";
import FoodAdmin from "./components/FoodAdmin";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <h4>Food and beverage management</h4>
        <Route path="/allFood" exact component={AllFood} />
        <Route path="/addFood" exact component={AddFood} />
        <Route path="/allOrders" exact component={AllOrders} />
        <Route path="/foodadmin" exact component={FoodAdmin} />
        <Route path="/foodCart" exact component={FoodCart} />
      </div>
    </Router>
  );
}

export default App;
