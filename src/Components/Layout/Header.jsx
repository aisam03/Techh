import React from 'react'

function Header() {
  return (
    <div>
        <div className='nav container'>
            <div className="nav-left">
                <div className='logo'><img src="Assets/logo.png" alt=""/></div>
            </div>
            <div className="logo-heading"><span className='powered'>Powered by</span> <span className='name'>Waqar Traders</span></div>
            <div className="nav-right">
                <button className='button1'>What we Offer</button>
                <button className='button2'>Contact US</button>
            </div>
        </div>
    </div>
  )
}

export default Header