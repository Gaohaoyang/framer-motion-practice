import React from 'react'
import { Link } from 'react-router-dom'

function intro() {
  return (
    <>
      <h1>hello framer-motion</h1>
      <ul>
        <li>
          <Link to="/AnimationElements">AnimationElements</Link>
        </li>
        <li>
          <Link to="/Variants">Variants</Link>
        </li>
      </ul>
    </>
  )
}

export default intro
