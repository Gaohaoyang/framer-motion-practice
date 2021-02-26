import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import assets from './assets'

import './index.css'

const getRandomTransformOrigin = () => {
  const value = (16 + 40 * Math.random()) / 100
  const value2 = (15 + 36 * Math.random()) / 100
  return {
    originX: value,
    originY: value2,
  }
}

const getRandomDelay = () => -(Math.random() * 0.7 + 0.05)

const randomDuration = () => Math.random() * 0.07 + 0.23

const variants = {
  start: (i) => ({
    rotate: i % 2 === 0 ? [-1, 1.3, 0] : [1, -1.4, 0],
    transition: {
      delay: getRandomDelay(),
      repeat: Infinity,
      repeatType: 'mirror',
      duration: randomDuration(),
    },
  }),
  reset: {
    rotate: 0,
  },
}

function index() {
  const controls = useAnimation()

  return (
    <div>
      <motion.h2
        initial={{
          y: -20,
        }}
        animate={{
          x: 10,
          y: 0,
        }}
      >
        AnimationElements
      </motion.h2>
      <button
        type="button"
        onClick={() => {
          controls.start('start')
        }}
      >
        start shaking
      </button>
      <span> </span>
      <button
        type="button"
        onClick={() => {
          controls.stop()
          controls.set('reset')
        }}
      >
        stop shaking
      </button>
      <br />
      <br />
      <div className="nine-wrap">
        {assets.rockStars.slice(0, 9).map((item, i) => (
          <motion.div
            className="nine-card"
            key={`${item.profile}`}
            style={{
              ...getRandomTransformOrigin(),
              backgroundImage: `url(${item.profile})`,
            }}
            // -- controls --
            custom={i}
            variants={variants}
            animate={controls}
          />
        ))}
      </div>
    </div>
  )
}

export default index
