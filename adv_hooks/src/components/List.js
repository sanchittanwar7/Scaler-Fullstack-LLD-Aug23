import React, { useState, useTransition } from 'react'

const List = () => {
    const [input, setInput] = useState('')
    const [list, setList] = useState([])
    const LIST_SIZE = 10000

    const [isPending, startTransition] = useTransition()

    const handleChange = e => {
        setInput(e.target.value)
        startTransition(() => {
            let newList = []
            for(var i = 0; i < LIST_SIZE; i++) {
                newList.push(e.target.value)
            }
            setList(newList)
        })
        
    }
    return (
        <div>
            <input type='text' value={input} onChange={handleChange} />
            {
                isPending ? <div>Loading</div> : list.map(text => {
                    return <h4>{text}</h4>
                })
            }

        </div>
    )
}

export default List