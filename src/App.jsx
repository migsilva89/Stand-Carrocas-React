import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CarsListPage from './pages/CarsListPage'
import ContactsPage from './pages/ContactsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/cars-list" element={<CarsListPage/>} />
        <Route path="/contacts" element={<ContactsPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App