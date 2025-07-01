import { useState } from 'react'

import './App.css'
/*import {Footer} from './core/components/layout/Footer.jsx'
import  Header  from './core/components/layout/Header.jsx'*/
import { Header, Footer } from './core/components/layout'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './core/routes/MainRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <MainRoutes />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
