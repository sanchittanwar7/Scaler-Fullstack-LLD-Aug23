import React, { Children, useContext } from 'react'
import { Context, Context2 } from './Context'
import ChildrenContext from './ChildrenContext'

const ParentsContext = () => {
    const familyDetails = useContext(Context)
    const data = useContext(Context2)
    console.log("Context: ", familyDetails)
    console.log("Context2: ", data)
    return (
        <div className='parent'>
            <h2>ParentsContext</h2>
            <p>{familyDetails.name}</p>
            <p>{familyDetails.funcForParent()}</p>
            <p>{data.text}</p>
            <ChildrenContext />
        </div>
    )
}

export default ParentsContext