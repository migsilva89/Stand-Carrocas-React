import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="h-10">
      <ul className="flex gap-4 p-2 px-4 bg-black text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/cars-list">Cars List</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
