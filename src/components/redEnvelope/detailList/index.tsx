import React from 'react'
import { motion } from 'framer-motion'
import DetailListItem from './detailListItem'
import './index.css'

function index(props) {
  const { setShowPop } = props
  return (
    <motion.div
      className="container"
      initial={{
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.3,
        },
      }}
    >
      <div className="head">
        <div
          className="headBg"
          style={{
            height: 52 + 88,
          }}
        >
          <div className="caishenProfile" />
        </div>
        <div
          className="textBelowProfile"
          style={{
            fontSize: 28,
            height: 40,
          }}
        >
          祝你 牛年大吉
        </div>
        <div className="title">送你现金红包</div>
        <div className="moneyWrap">
          <div className="money">6.6</div>
          <div className="unit">元</div>
        </div>
        <div className="info">找好友拿更多现金即可提现</div>
        <motion.div
          className="btnWrap"
          whileTap={{ scale: 0.99 }}
          onTap={() => {
            setTimeout(() => {
              setShowPop(false)
            }, 60)
          }}
        >
          <div>立即提现</div>
        </motion.div>
      </div>

      <div className="list">
        <div className="listTitle">提现记录</div>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
          <DetailListItem />
        ))}
      </div>
    </motion.div>
  )
}

export default index
