import React , {useRef} from 'react'

const Uncontrolled = () => {
    const inputRef = useRef(null)


    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(inputRef.current.value)
    }
  return (
    <div>
        <form>
            <input type='text' placeholder='uncontrolled' ref={inputRef}/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Uncontrolled