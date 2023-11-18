import React from 'react'

import Logo from '../MovieLogo.png'

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
      <img src={Logo} className='w-[50px]'/>
      <h3>Movies</h3>
      <h3>Watchlist</h3>
    </div>
  )
}

export default Navbar