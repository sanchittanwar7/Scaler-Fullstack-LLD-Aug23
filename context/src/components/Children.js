import React from 'react'
import GrandDaughter from './GrandDaughter'
import GrandSon from './GrandSon'

const Children = ({familyDetails}) => {
  return (
    <div className='children'>
        <h2>Children</h2>
        <p>{familyDetails.name}</p>
        <GrandDaughter familyDetails={familyDetails}/>
        <GrandSon familyDetails={familyDetails}/>
    </div>
  )
}

export default Children