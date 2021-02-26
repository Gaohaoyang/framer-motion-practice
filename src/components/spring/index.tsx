import React from 'react'
import { motion } from 'framer-motion'

import './index.css'

function index() {
  return (
    <>
      <div className="wrap">
        <div className="title">零阻尼</div>
        <motion.div
          className="ball"
          animate={{
            x: 150,
            transition: {
              type: 'spring',
              damping: 0,
            },
          }}
        />
      </div>
      <div className="wrap">
        <div className="title">欠阻尼</div>
        <motion.div
          className="ball"
          animate={{
            x: 150,
            transition: {
              type: 'spring',
              damping: 2,
            },
          }}
        />
      </div>
      <div className="wrap">
        <div className="title">过阻尼</div>
        <motion.div
          className="ball"
          animate={{
            x: 150,
            transition: {
              type: 'spring',
              damping: 100,
            },
          }}
        />
      </div>
      <div className="wrap">
        <div className="title">临界阻尼</div>
        <motion.div
          className="ball"
          animate={{
            x: 150,
            transition: {
              type: 'spring',
              damping: 17,
            },
          }}
        />
      </div>

      <br />
      <br />
      <br />
      <button
        type="button"
        onClick={() => {
          window.location.reload()
        }}
      >
        reload this page
      </button>
    </>
  )
}

export default index
