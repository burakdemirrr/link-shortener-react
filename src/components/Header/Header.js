import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className="header">
        <div className="brand_logo">
            <img src="https://i.pinimg.com/originals/f4/f0/19/f4f019568ab6a61458b2b1875e4d4b99.png" alt="" />
        </div>
        <div className="rest">
            <button>Get Started</button>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Header