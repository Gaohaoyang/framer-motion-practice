import React from 'react'
import { motion } from 'framer-motion'

function AnimationElements() {
  return (
    <div>
      <motion.h2
        initial={false}
        // initial={{
        //   y: -20,
        // }}
        animate={{
          x: 50,
          y: 10,
          scale: 1.2,
        }}
      >
        AnimationElements
      </motion.h2>
    </div>
  )
}

export default AnimationElements
