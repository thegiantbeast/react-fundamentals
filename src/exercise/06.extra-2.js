// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useRef, useState } from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = useRef()
  const [error, setError] = useState(null)

  const handleChange = (event) => {
    const { value } = event.target
    const isValid = value === value.toLowerCase()
    setError(!isValid ? 'Username must be lower case' : null)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const username = inputRef.current.value

    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input ref={inputRef} type="text" id="username" onChange={handleChange} />
        {error ? (
          <div style={{ color: 'red' }}>{error}</div>
        ): null}
      </div>
      <button type="submit" disabled={error}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
