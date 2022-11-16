import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='py-8 px-12 font-medium text-md'>
      <ul className="text-gray-400 flex items-center justify-between">
        <li>
          <Link to="/">
            <img src="/fullLogo.png" alt="" className="w-40" />
          </Link>
        </li>
        <ul className="flex justify-evenly w-1/2">
          <li className='hover:text-gray-600'>
            <Link to="/">Home</Link>
          </li>
          <li className='hover:text-gray-600'>
            <Link to="/about">Sobre</Link>
          </li>
          <li className='hover:text-gray-600'>
            <Link to="/contacts">Contactos</Link>
          </li>
        </ul>

        <li className="bg-blue-500 text-white py-3 px-5 hover:bg-blue-400">
          <Link to="/cars-list">Catalogo</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
