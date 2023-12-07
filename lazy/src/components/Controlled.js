import React , {useState} from 'react'

const Controlled = () => {

    const [text , setText] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        console.log(text)
    }
  return (
    <div>
        <form>
            <input type='text' value={text} placeholder='controlled' onChange={(e)=>setText(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Controlled