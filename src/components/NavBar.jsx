import React from 'react'
import { Link } from 'react-router-dom'
import { pulse } from 'react-animations'
import styled, { keyframes } from 'styled-components'

const Pulse = styled.div`
  animation: 1s ${keyframes`${pulse}`} infinite;
`
function NavBar() {

  return (
    <nav className="py-8 px-12 font-medium text-md  max-w-7xl mx-auto">
      <ul className="text-gray-400 flex items-center justify-between">
        <li>
          <Link to="/">
            <img src="/fullLogo.png" alt="" className="w-40" />
          </Link>
        </li>
        <ul className="flex justify-evenly w-1/2">
          <li className="hover:text-gray-600 shadow-[0_0px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(30,144,255)] ease-out hover:translate-y-1 transition-all rounded">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-600 shadow-[0_0px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(30,144,255)] ease-out hover:translate-y-1 transition-all rounded">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-600 shadow-[0_0px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(30,144,255)] ease-out hover:translate-y-1 transition-all rounded">
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
        <Pulse>
          <Link  to="/cars-list" className="bg-blue-500 text-white py-3 px-10 hover:bg-blue-400 cursor-pointer">
            <a>FIND YOUR CAR</a>
          </Link >
        </Pulse>
      </ul>
    </nav>
  )
}

export default NavBar
