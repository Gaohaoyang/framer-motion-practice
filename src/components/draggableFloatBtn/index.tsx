import React from 'react'
import FloatAttachContainer from './components/floatAttachContainer'

import './index.css'

function index() {
  return (
    <>
      <FloatAttachContainer
        initBoundary="right"
        style={{
          top: '50%',
        }}
      >
        <div className="btn2">hello</div>
      </FloatAttachContainer>
      <FloatAttachContainer>
        <div className="btn">
          drag
        </div>
      </FloatAttachContainer>
      <div className="box">box</div>
      <div className="box">box</div>
      <div className="box">box</div>
      <div className="box">box</div>
      <div className="box">box</div>
      <div className="box">box</div>
      <div className="box">box</div>
      <div className="box">box</div>
      <div className="box">box</div>
      <div className="box">box</div>
    </>
  )
}

export default index
