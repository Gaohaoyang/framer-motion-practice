import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import assets from '../assets'

import './AnimationElements.css'

const variants = {
  visible: (i) => ({
    opacity: 1,
    rotate: 10,
    transition: {
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0 },
}

function AnimationElements() {
  const controls = useAnimation()

  // useEffect(() => {
  //   controls.start((i) => ({
  //     opacity: 0,
  //     x: 100,
  //     transition: { delay: i * 0.3 },
  //   }))
  // }, [])

  return (
    <div>
      <motion.h2
        // initial={false}
        initial={{
          y: -20,
        }}
        animate={{
          x: 50,
          y: 10,
          scale: 1.2,
        }}
      >
        AnimationElements
      </motion.h2>
      <button
        type="button"
        onClick={() => {
          controls.start('visible')
        }}
      >
        start shaking
      </button>
      <button type="button">stop shaking</button>
      <br />
      <br />
      <div className="nine-wrap">
        {assets.rockStars.slice(0, 9).map((item, i) => (
          <motion.div
            className="nine-card"
            key={`${item.profile}`}
            // animate={{ rotate: 10 }}
            // style={{ backgroundImage: `url(${item.profile})` }}
            // -- Dynamic variants --
            custom={i}
            // animate="visible"
            variants={variants}
            // -- controls --
            animate={controls}
          />
        ))}
      </div>
    </div>
  )
}

export default AnimationElements
