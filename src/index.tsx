import React, { useEffect } from 'react'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import Stats from 'stats-js'
import App from './app'

const Index = () => {
  useEffect(() => {
    const stats = new Stats()
    stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
    document.createElement('div')
    stats.dom.style.cssText = 'position:fixed;bottom:0;right:0;cursor:pointer;opacity:0.8;z-index:10000'
    document.body.appendChild(stats.dom)
    requestAnimationFrame(function loop() {
      stats.update()
      requestAnimationFrame(loop)
    })
  }, [])

  return (
    <>
      <Router>
        <App />
      </Router>
    </>
  )
}

render(<Index />, document.getElementById('root'))
