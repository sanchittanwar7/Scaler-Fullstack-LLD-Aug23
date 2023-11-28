import React, { useRef, useState } from 'react'

const Form = () => {
    const refElement = useRef('')
    const [name, setName] = useState('')

    return (
        <div>
            <input ref={refElement} type='text' value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={() => {
                console.log(refElement)
                refElement.current.focus()
                setName('')
            }}>Clear</button>
        </div>
    )
}

export default Form