import React, { useRef, useState } from 'react'

function Reference() {
    const ref = useRef(3)
    console.log(ref)
    let a = 10
    const [state, setState] = useState(0)

    function handleClick() {
        console.log(this)
        ref.current = 9
        a = 100
        // setState(8)
        console.log(ref)
        console.log(a)
        // this.forceUpdate()
    }
  return (
    <>
        <div>{ref.current}</div>
        <div>{a}</div>
        <button onClick={handleClick}>Button</button>
    </>
  )
}

export default Reference