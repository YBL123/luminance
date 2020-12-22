import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Home from './Home'
import Products from './Products'
import Events from './Events'


import Navbar from './common/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Products" component={Products} />
        <Route path="/Events" component={Events} />
      </Switch>
    </BrowserRouter>
  )
}

export default App


