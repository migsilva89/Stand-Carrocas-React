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
import { useEffect } from 'react'

function ScrollToTop() {
  //we use useLocation() to set the scroll to 0, 0 everytime the route pathname changes
  //check for better solution
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cars-list" element={<CarsListPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/cars/:slug" element={<SingleCarPage />} />
        <Route path="/buy/:slug" element={<BuyCarPage />} />
        <Route path="/sell" element={<SellCarPage />} />
        <Route path="/testdrive/:slug" element={<TestDrivePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
