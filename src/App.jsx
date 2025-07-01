import { useState } from 'react'
import { Button } from '@progress/kendo-react-buttons'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button themeColor='primary'>Test</Button>
    </>
  )
}

export default App
