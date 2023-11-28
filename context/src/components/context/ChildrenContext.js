import React from 'react'
import GrandDaughterContext from './GrandDaughterContext'
import GrandSonContext from './GrandSonContext'

const ChildrenContext = () => {
  return (
    <div className='children'>
        <h2>ChildrenContext</h2>
        <GrandDaughterContext />
        <GrandSonContext />
    </div>
  )
}

export default ChildrenContext