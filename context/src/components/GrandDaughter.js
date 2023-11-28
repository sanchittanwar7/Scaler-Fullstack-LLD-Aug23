import React from 'react'

const GrandDaughter = ({familyDetails}) => {
  return (
    <div className='gdaughter'>
        <h2>GrandDaughter</h2>
        <p>{familyDetails.funcForGrandChildren()}</p>
    </div>
  )
}

export default GrandDaughter