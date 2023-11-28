import React from 'react'
import Parents from './Parents'

const Family = () => {
    const familyDetails = {
        "name": "Family name",
        funcForParent: () => {
            return 'This is a function for parent'
        },
        funcForGrandChildren: () => {
            return 'This is a fucntion for grand children'
        }

    }
  return (
    <div className='family'>
        <Parents familyDetails={familyDetails}/>
    </div>
  )
}

export default Family