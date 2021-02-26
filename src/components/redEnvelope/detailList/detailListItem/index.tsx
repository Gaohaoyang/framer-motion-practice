import React from 'react'
import './index.css'

function index() {
  // const { userImage, userNick, awardName } = props
  return (
    <div className="container">
      <div className="left">
        <div
          className="profile"
          style={{
            backgroundImage: 'url(https://gw.alicdn.com/tfs/TB1ubmmRHr1gK0jSZFDXXb9yVXa-500-500.png)',
          }}
        />
        <div className="nickWrap">
          <div className="nick">及时雨</div>
          <div className="inviteText">邀请了19位好友</div>
        </div>
      </div>
      <div className="right">
        <div>提现了</div>
        <div className="red">12.6</div>
        <div>元</div>
      </div>
    </div>
  )
}

export default index
