import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import './index.css'

const contentListData = [
  'Spring',
  'FadeInOut',
  'Orchestration',
  'ShakingCards',
  'Fireworks',
  'RedEnvelope',
  'FlipCard',
  'DragBall',
]

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  hidden: { opacity: 0 },
}

const itemVariants = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: { opacity: 0, x: 100 },
}

function intro() {
  return (
    <div>
      <motion.h1
        initial={{
          scale: 0.8,
        }}
        animate={{
          scale: 1,
          transition: {},
        }}
      >
        hello framer-motion
      </motion.h1>
      <motion.ul initial="hidden" animate="visible" variants={list}>
        {contentListData.map((item) => (
          <motion.li key={item} variants={itemVariants}>
            <Link to={`/${item}`}>{item}</Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default intro
