import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(username, password)
    }
  return (
    <div>
        <form>
            <input type='text' placeholder='Enter username' value={username} onChange={e => setUsername(e.target.value)}/>
            <input type='password' placeholder='Enter password' value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={handleLogin} disabled={!username || !password}>Login</button>
        </form>
    </div>
  )
}

export default Login