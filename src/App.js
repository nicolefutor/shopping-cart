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
import items from './data/items';
import ItemPage from "./components/ItemPage";

function App() {
  const shopItems = items;
  const cartIetms = [];
  const setItem = () => {

  };
  const deleteItem = () => {

  };
  return (
    <BrowserRouter>
      <div>
        <Navbar numItems={1} />
        <Switch>
          <Route path="/shop">
            <Shop items={shopItems}/>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path='/items/:id'>
            <ItemPage items={shopItems}/>
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
