import {useEffect, useState} from 'react'


const Counter = () => {
    const [counter, setCounter] = useState(1)
    const handleIncrement = () => {
        setCounter(counter+1)
        console.log('New Value: ', counter)
    }

    useEffect(() => {
        console.log(counter)
    }, [])
    
    const handleDecrement = () => {
        setCounter(counter-1)
    }
    return (
        <div>
            <div>Counter: {counter}</div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Counter