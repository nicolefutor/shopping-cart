import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Cart from "./components/Cart";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ItemPage from "./components/ItemPage";
import items from './data/items';
import { useEffect, useState } from "react";
import UnderConstruction from "./components/UnderConstruction";

const pureArraySet = (array, oldItem, newItem) => {
  let newArr = Array.from(array);
  newArr[array.indexOf(oldItem)] = newItem;
  return newArr;
}

function App() {
  const shopItems = items;
  const [cartItems, setCartItems] = useState([])

  const setItem = (item) => {
    const existingItem = cartItems.find(x => x.id===item.id)
    if (existingItem) {
      setCartItems(pureArraySet(cartItems, existingItem, item))
    }
    else {
      setCartItems(cartItems.concat(item))
    }
  };
  const deleteItem = (item) => {
    setCartItems(cartItems.filter(x => x!==item))
  };
  
  const [quantity, setQuantity] = useState(cartItems.map((x) => x.quantity).reduce((prev, curr) => prev+curr, 0))
  useEffect(() => {
    setQuantity(cartItems.map((x) => x.quantity).reduce((prev, curr) => prev+curr, 0))
  }, [cartItems])

  return (
    <BrowserRouter>
      <div>
        <Navbar numItems={quantity} />
        <Switch>
          <Route path="/shop">
            <Shop items={shopItems} />
          </Route>
          <Route path="/cart">
            <Cart items={cartItems} deleteItem={deleteItem} setItem={setItem} />
          </Route>
          <Route path='/under-construction'>
            <UnderConstruction />
          </Route>
          <Route path='/items/:id'>
            <ItemPage shopItems={shopItems} cartItems={cartItems} setItem={setItem} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
