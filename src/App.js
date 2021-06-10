import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalStyle } from './globalStyles'
import BuyProd from './Components/BuyProducts'
import Home from './Components/HomePage/Home'
import Cart from './Components/Cart/Cart'
import CartReceipt from './Components/Cart/CartReceipt'
// import Nav from './PracticeComps/Nav'
// import About from './PracticeComps/About'
// import Shop from './PracticeComps/Shop'



function App() {
  return (
    <div>
      <Router>
         <GlobalStyle />
          <Switch>
            <Route path='/' exact component={Home} />
              <Route path='/buyprod/:id' component={BuyProd} />
              <Route path='/cart/' component={Cart} />
              <Route path='/receipt' component={CartReceipt} />
          </Switch>
          </Router>

    </div>
  )
}


export default App