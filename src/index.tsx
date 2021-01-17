import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import AnimationElements from './components/AnimationElements'
import Variants from './components/Variants'

const App = () => (
  <Router>
    <Switch>
      <Route path="/Variants">
        <Variants />
      </Route>
      <Route path="/AnimationElements">
        <AnimationElements />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
)

render(<App />, document.getElementById('root'))
