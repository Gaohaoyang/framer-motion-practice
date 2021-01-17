import React from 'react'
// import { motion } from 'framer-motion'
import './Home.css'
import { Link } from 'react-router-dom'

function intro() {
  return (
    <div>
      <h1>hello framer-motion</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AnimationElements">AnimationElements</Link>
        </li>
        <li>
          <Link to="/Variants">Variants</Link>
        </li>
      </ul>
      {/* <motion.div className="motion-intro" animate={{ scale: 1.5 }} /> */}

    </div>
  )
}

export default intro
