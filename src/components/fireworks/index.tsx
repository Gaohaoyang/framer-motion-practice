import React from 'react'
import { motion } from 'framer-motion'
import './index.css'

const fireworksVariants = {
  hidden: {
    scale: 0.1,
    opacity: 0,
  },
  visible: {
    scale: [0.1, 1.34],
    opacity: [0, 1, 1, 0],
    transition: {
      times: [0, 0.2, 0.8, 1],
      duration: 2.2,
      repeat: Infinity,
    },
  },
}

const fireworksVariants2 = {
  hidden: {
    scale: 0.1,
    opacity: 0,
  },
  visible: {
    scale: [0.1, 1.34],
    opacity: [0, 1, 1, 0],
    transition: {
      delay: 0.9,
      times: [0, 0.2, 0.7, 1],
      duration: 2.4,
      repeat: Infinity,
    },
  },
}

function index() {
  return (
    <div className="container">
      <h1 className="title">fireworks</h1>
      <motion.div
        className="fireworks f1"
        variants={fireworksVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="fireworks f2"
        variants={fireworksVariants2}
        initial="hidden"
        animate="visible"
      />
    </div>
  )
}

export default index
