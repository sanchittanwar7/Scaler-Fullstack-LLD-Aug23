import React, { useState } from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        // console.log(e)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleSubmit = (e) => {
        // extract user input
        e.preventDefault()
        console.log(firstName)
        console.log(lastName)

        // make a backend API call with data
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Form</h1>
            <input type='text' placeholder='Enter first name' value={firstName}     onChange={handleFirstName}></input>
            <input type='text' placeholder='Enter last name' value={lastName} onChange={handleLastName}></input>
            <button>Submit</button>
        </form>
    </div>
    )
}

export default Form