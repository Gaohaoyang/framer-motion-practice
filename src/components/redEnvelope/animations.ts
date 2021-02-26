export const redEnvelopeContainerVariants = {
  fadeIn: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 500,
    },
  },
  whileTap: {
    scale: [1, 0.988, 1],
    transition: {
      duration: 0.2,
    },
  },
  fadeOut: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
}

export const coinRotateVariants = {
  initial: {
    z: 800,
  },
  start: {
    rotateY: 360,
    transition: {
      repeat: Infinity,
      duration: 1.5,
    },
  },
}
