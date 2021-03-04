import React from 'react'
import FloatAttachContainer from './components/floatAttachContainer'

import './index.css'

function index() {
  return (
    <>
      <FloatAttachContainer>
        <button className="btn" type="button">
          drag and click
        </button>
      </FloatAttachContainer>
      <FloatAttachContainer
        initBoundary="right"
        style={{
          top: '50%',
        }}
      >
        <div className="btn2">hello</div>
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
