import React, { useCallback, useState } from 'react'

const MultipleInputForm = () => {
    const [formData, setFormData] = useState({firstName: '', lastName: ''})
    const handleInput = e => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
        // const newFormData = {
        //     firstName: formData.firstName,
        //     lastName: formData.lastName
        // }
        // if (name === 'firstName') {
        //     newFormData.firstName = value
        // } else if(name === 'lastName') {
        //     newFormData.lastName = value
        // }
        // setFormData(newFormData)
        console.log(name, value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log(formData)
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Form</h1>
            <input type='text' placeholder='Enter first name' name='firstName' value={formData.firstName} onChange={handleInput}></input>
            <input type='text' placeholder='Enter last name' name='lastName' value={formData.lastName} onChange={handleInput}></input>
            <button>Submit</button>
        </form>
    </div>
    )
}

export default MultipleInputForm