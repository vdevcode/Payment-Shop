
import './App.css';
import './common/Header/Header.css'
import Header from './common/Header/Header';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Pages from './pages/Pages'
import Data from './component/flashDeals/Data'
import { useState } from 'react';

function App() {
  const {productItems} = Data
  const [cartItem,setCardItem] = useState([])
  const addToCart = (product) =>{
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  return (
    <>
      <Router>
          <Header/>
          <Switch>
              <Route path='/' exact>
                  <Pages  productItems={productItems}/>
              </Route>
          </Switch>
      </Router>
    
    </>
  );
}

export default App;
