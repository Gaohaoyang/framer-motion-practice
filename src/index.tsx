import React, { useEffect } from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Stats from 'stats-js'
import Home from './components/home'
import ShakingCards from './components/shakingCards'
import Fireworks from './components/fireworks'
import RedEnvelope from './components/redEnvelope'
import FadeInOut from './components/fadeInOut'
import FlipCard from './components/flipCard'
import DragBall from './components/dragBall'
import Spring from './components/spring'

const App = () => {
  useEffect(() => {
    const stats = new Stats()
    stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
    document.createElement('div')
    stats.dom.style.cssText =
      'position:fixed;bottom:0;right:0;cursor:pointer;opacity:0.8;z-index:10000'
    document.body.appendChild(stats.dom)
    requestAnimationFrame(function loop() {
      stats.update()
      requestAnimationFrame(loop)
    })
  }, [])

  return (
    <>
      <Router>
        <Switch>
          <Route path="/Fireworks">
            <Fireworks />
          </Route>
          <Route path="/ShakingCards">
            <ShakingCards />
          </Route>
          <Route path="/RedEnvelope">
            <RedEnvelope />
          </Route>
          <Route path="/FadeInOut">
            <FadeInOut />
          </Route>
          <Route path="/FlipCard">
            <FlipCard />
          </Route>
          <Route path="/DragBall">
            <DragBall />
          </Route>
          <Route path="/Spring">
            <Spring />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

render(<App />, document.getElementById('root'))
