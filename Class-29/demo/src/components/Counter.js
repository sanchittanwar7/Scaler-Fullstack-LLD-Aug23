import {useState} from 'react'



const Counter = () => {
    const [counter, setCounter] = useState(1)
    const handleIncrement = () => {
        // counter = 0
        setCounter(counter+1) // setCount(1)
        // counter = 0
        setCounter(counter+1) // setCount(1)
    }
    
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