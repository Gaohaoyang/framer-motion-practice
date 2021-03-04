import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import useDimensions from 'react-use-dimensions'

interface propsType {
  children: React.ReactNode
  style?: React.CSSProperties
  initBoundary?: 'left' | 'right'
  delay?: number
}

const defaultStyle: React.CSSProperties = {
  zIndex: 1000,
  position: 'fixed',
  top: '70%',
}

function floatAttachContainer(props: propsType) {
  const {
    children,
    style = {},
    initBoundary = 'left',
    delay = 0.3,
  } = props
  const [ref, { width, height, y }] = useDimensions({ liveMeasure: false })
  const controls = useAnimation()

  const commonVariants = {
    transition: {
      delay,
    },
  }

  const variants = initBoundary === 'left'
    ? {
      attachLeft: {
        x: 0,
        ...commonVariants,
      },
      attachRight: {
        x: window.screen.width - width,
        ...commonVariants,
      },
    }
    : {
      attachLeft: {
        x: -(window.screen.width - width),
        ...commonVariants,
      },
      attachRight: {
        x: 0,
        ...commonVariants,
      },
    }

  const constraints = initBoundary === 'left'
    ? {
      left: 0,
      right: window.screen.width - width,
      top: -y,
      bottom: document.documentElement.clientHeight - y - height,
    } : {
      left: -(window.screen.width - width),
      right: 0,
      top: -y,
      bottom: document.documentElement.clientHeight - y - height,
    }

  return (
    <motion.div
      ref={ref}
      style={{
        ...defaultStyle,
        ...style,
        right: initBoundary === 'right' ? 0 : 'auto',
        left: initBoundary === 'left' ? 0 : 'auto',
      }}
      drag
      dragMomentum={false}
      dragConstraints={constraints}
      dragElastic={0.2}
      onDragEnd={(event, info) => {
        if (info.point.x > window.screen.width / 2) {
          controls.start('attachRight')
        } else {
          controls.start('attachLeft')
        }
      }}
      variants={variants}
      animate={controls}
      whileTap={{
        scale: 0.95,
      }}
    >
      {children}
    </motion.div>
  )
}

export default floatAttachContainer
