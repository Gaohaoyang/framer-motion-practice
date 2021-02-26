import React, { useState, useEffect } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { redEnvelopeContainerVariants, coinRotateVariants } from './animations'
import DetailList from './detailList'
import './index.css'

function index() {
  const [showDetailList, setShowDetailList] = useState(false)
  const [showPop, setShowPop] = useState(true)
  const redEnvelopeAnimControls = useAnimation()
  const coinAnimControls = useAnimation()

  useEffect(() => {
    redEnvelopeAnimControls.start('fadeIn')
  }, [])

  return (
    <AnimatePresence>
      {showPop && (
        <motion.div
          className="container"
          exit={{
            opacity: 0,
            scale: 0.8,
            transition: {
              duration: 0.22,
            },
          }}
        >
          <motion.div
            className="redEnvelopeContainer"
            initial={{ scale: 0.8 }}
            variants={redEnvelopeContainerVariants}
            animate={redEnvelopeAnimControls}
            onTap={() => {
              redEnvelopeAnimControls.start('whileTap')
            }}
          >
            <div className="godProfile" />
            <div className="text">特价版财神爷</div>
            <div className="title">祝您 牛年大吉</div>
            <motion.div
              className="kaiCoin"
              initial="initial"
              variants={coinRotateVariants}
              animate={coinAnimControls}
              onTap={() => {
                coinAnimControls.start('start')
                setTimeout(() => {
                  coinAnimControls.stop()
                  redEnvelopeAnimControls.start('fadeOut')
                  setShowDetailList(true)
                }, 1200)
              }}
            />
          </motion.div>
          {showDetailList && <DetailList setShowPop={setShowPop} />}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default index
