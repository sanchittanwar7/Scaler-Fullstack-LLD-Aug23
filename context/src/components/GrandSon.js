import React from 'react'

const GrandSon = ({familyDetails}) => {
  return (
    <div className='gson'>
        <h2>GrandSon</h2>
        <p>{familyDetails.funcForGrandChildren()}</p>
    </div>
  )
}

export default GrandSon