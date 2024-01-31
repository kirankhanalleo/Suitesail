import React from 'react'
import "./MailList.css";
function MailList() {
  return (
    <div className="mailList">
      <div className="mailList__Title">
        <h1>Simplify booking, spend less!</h1>
        <p className="mailList__Desc">Register now for exclusive top picks sent directly to you.</p>
        <div className="mailList__InputContainer">
          <input type="text" placeholder='Your Email' />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default MailList