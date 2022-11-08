import { useState } from 'react'

function ErrorTest() {
  const [error, setError] = useState(false)
  if (error) {
    throw new Error('Something went wrong')
  }
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100vh"}}>
      Testing The Error Page
      <button onClick={() => setError(true)}>Click To Test Error Boundary</button>
    </div>
  )
}

export default ErrorTest
