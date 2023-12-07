import React from 'react'
import HOC from './HOC'

const Comp = (props) => {
    console.log("props", props)
  return (
    <div style={props.style}>This is my component</div>
  )
}

export default HOC(Comp)