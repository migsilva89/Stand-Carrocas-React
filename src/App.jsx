import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CarsListPage from './pages/CarsListPage'
import ContactsPage from './pages/ContactsPage'
import SingleCarPage from './pages/SingleCarPage'
import BuyCarPage from './pages/BuyCarPage'
import SellCarPage from './pages/SellCarPage'
import TestDrivePage from './pages/TestDrivePage'
import { useEffect, useState } from 'react'
import axios from 'axios'

function ScrollToTop() {
  //we used useLocation() to set the scroll to 0, 0 everytime the route pathname changes
  //check for better solution
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// API REQUEST
function App() {
  const [data, setData] = useState([])

  const handleFactsApiRequest = async () => {
    const { data } = await axios({
      method: 'GET',
      url: 'https://6399fba316b0fdad77503d25.mockapi.io/Cars',
    })
    setData(data)
  }

  useEffect(() => {
    handleFactsApiRequest()
  }, [])

 
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage data={data}/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cars-list" element={<CarsListPage data={data}/>} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/cars/:slug" element={<SingleCarPage data={data}/>} />
        <Route path="/buy/:slug" element={<BuyCarPage data={data}/>} />
        <Route path="/sell" element={<SellCarPage />} />
        <Route path="/testdrive/:slug" element={<TestDrivePage data={data}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
