/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

import './index.css'

const commonVariants = {
  z: 0,
  transformPerspective: 1000,
  transition: { type: 'spring', stiffness: 200, damping: 16 },
}

const frontVariants = {
  front: {
    ...commonVariants,
    opacity: 1,
    rotateY: 0,
  },
  back: {
    ...commonVariants,
    opacity: 0,
    rotateY: -180,
  },
}

const backVariants = {
  front: {
    ...commonVariants,
    opacity: 1,
    rotateY: 0,
  },
  back: {
    ...commonVariants,
    opacity: 0,
    rotateY: 180,
  },
}

function index() {
  const [flipped, setFlipped] = useState(false)
  const cardCtrl = useAnimation()
  const cardBackCtrl = useAnimation()

  useEffect(() => {
    cardCtrl.start(flipped ? 'back' : 'front')
    cardBackCtrl.start(flipped ? 'front' : 'back')
  }, [flipped])

  return (
    <div
      className="wrap"
      onClick={() => {
        setFlipped((pre) => !pre)
      }}
    >
      <motion.div
        className="card front"
        initial="front"
        variants={frontVariants}
        animate={cardCtrl}
      />
      <motion.div
        className="card back"
        initial="back"
        variants={backVariants}
        animate={cardBackCtrl}
      />
    </div>
  )
}

export default index
