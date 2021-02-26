import React from 'react'
import { motion } from 'framer-motion'
import './index.css'

function index() {
  return (
    <div className="container">
      <div
        className="box"
        style={{
          width: '300px',
          height: '500px',
        }}
      >
        <motion.div
          style={{ width: '44px', height: '44px' }}
          className="ball"
          drag
          dragConstraints={{
            top: -228,
            bottom: 228,
            left: -128,
            right: 128,
          }}
          dragElastic={0.2}
        />
      </div>
    </div>
  )
}

export default index
