import React from 'react'
import {
  Switch, Route, Link, useLocation,
} from 'react-router-dom'
import Home from './components/home'
import ShakingCards from './components/shakingCards'
import Fireworks from './components/fireworks'
import RedEnvelope from './components/redEnvelope'
import FadeInOut from './components/fadeInOut'
import FlipCard from './components/flipCard'
import DragBall from './components/dragBall'
import Spring from './components/spring'
import Orchestration from './components/orchestration'
import DraggableFloatBtn from './components/draggableFloatBtn'

function App() {
  const location = useLocation()

  return (
    <>
      {location?.pathname !== '/' && <Link to="/">back to home</Link>}
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
        <Route path="/Orchestration">
          <Orchestration />
        </Route>
        <Route path="/DraggableFloatBtn">
          <DraggableFloatBtn />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  )
}

export default App
