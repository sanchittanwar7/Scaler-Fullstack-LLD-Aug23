import React from 'react'

const handleClick = (e) => {
    console.log("Im clicked")
    console.log(e)
}

const UserProfile = (props) => {
    console.log(props)
    const {name, age, company} = props
    // props.name = 'ACB' Props are immutable
    // const [first, second, third] = [1,2,3]
  return (
    <div>
        <h1>Name: {name}, Age: {age}, Company: {company}</h1>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default UserProfile