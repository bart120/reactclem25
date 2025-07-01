import { useState } from 'react'

import './App.css'
/*import {Footer} from './core/components/layout/Footer.jsx'
import  Header  from './core/components/layout/Header.jsx'*/
import { Header, Footer } from './core/components/layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default App
