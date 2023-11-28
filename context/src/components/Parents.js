import React from 'react'
import Children from './Children'

const Parents = ({familyDetails}) => {
  return (
    <div className='parent'>
        <h2>Parents</h2>
        <p>{familyDetails.name}</p>
        <p>{familyDetails.funcForParent()}</p>
        <Children familyDetails={familyDetails}/>
    </div>
  )
}

export default Parents