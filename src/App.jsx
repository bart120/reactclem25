import { useEffect, useState } from 'react'

import './App.css'
/*import {Footer} from './core/components/layout/Footer.jsx'
import  Header  from './core/components/layout/Header.jsx'*/
import { Header, Footer } from './core/components/layout'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './core/routes/MainRoutes'
import { useTranslation } from 'react-i18next'

function App() {
  const [count, setCount] = useState(0)
  const {i18n} = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

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
