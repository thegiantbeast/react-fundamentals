// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

const Box = ({ size, style, ...rest }) => {
  const boxClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${boxClassName}`}
      style={{ ...style, fontStyle: 'italic' }}
      {...rest}
    />
  )
}

const smallBox = <Box size="small" style={{ backgroundColor: 'lightblue' }}>small lightblue box</Box>
const mediumBox = <Box size="medium" style={{ backgroundColor: 'pink' }}>medium pink box</Box>
const largeBox = <Box size="large" style={{ backgroundColor: 'orange' }}>large orange box</Box>
const sizelessBox = <Box>sizeless box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      {sizelessBox}
    </div>
  )
}

export default App
