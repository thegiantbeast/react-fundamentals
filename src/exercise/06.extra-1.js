// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useRef } from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()

    const username = inputRef.current.value
    
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input ref={inputRef} type="text" id="username" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
