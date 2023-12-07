import React from 'react'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{
         display:'flex',
         justifyContent: 'space-between'
    }}>

        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Products</Link>
        <Link to='/chat'>Chat</Link>
    </div>
  )
}

export default Navbar