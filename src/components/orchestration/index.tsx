import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
}

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 60 },
}

const listData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function index() {
  const controls = useAnimation()
  const [toggleShow, setToggleShow] = useState(true)

  useEffect(() => {
    if (toggleShow) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [toggleShow])

  return (
    <>
      <motion.ul
        initial="hidden"
        animate={controls}
        variants={list}
        style={{
          backgroundColor: '#ddd',
        }}
      >
        {listData.map((itemData) => (
          <motion.li variants={item} key={itemData}>
            {itemData}
          </motion.li>
        ))}
      </motion.ul>
      <button
        type="button"
        onClick={() => {
          setToggleShow((p) => !p)
        }}
      >
        show or hide
      </button>
    </>
  )
}

export default index
