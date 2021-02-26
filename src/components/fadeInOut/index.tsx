import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function index() {
  const [toggleShow, setToggleShow] = useState(true)
  return (
    <>
      <br />
      <br />
      <button
        onClick={() => {
          setToggleShow((pre) => !pre)
        }}
        type="button"
      >
        toggleShow
      </button>
      <br />
      <br />

      <AnimatePresence>
        {toggleShow && (
          <motion.div
            style={{
              backgroundColor: '#ddd',
              width: '50vw',
              height: '80vw',
            }}
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 100 }}
            exit={{ opacity: 0, x: 0 }}
          >
            fadeInOut animation
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default index
