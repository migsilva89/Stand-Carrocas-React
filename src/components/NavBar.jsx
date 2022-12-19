import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { pulse } from 'react-animations'
import styled, { keyframes } from 'styled-components'

const Pulse = styled.div`
  animation: 1s ${keyframes`${pulse}`} infinite;
`
function NavBar() {
  const [showNavBar, setShowNavBar] = useState(false)

  const genericHamburgerLine = `h-1 w-7 rounded-full bg-gray-600 transition ease transform duration-300`

  const toogleNavBar = () => {
    setShowNavBar(!showNavBar)
  }

  return (
    <nav className="py-8 font-medium text-md max-w-7xl mx-auto w-full px-12">
      <ul className="hidden text-gray-400 md:flex items-center justify-between">
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
          <Link
            to="/cars-list"
            className="bg-blue-500 text-white py-3 px-10 hover:bg-blue-400 cursor-pointer"
          >
            <button>FIND YOUR CAR</button>
          </Link>
        </Pulse>
      </ul>
      {/* <!-- HAMBURGUER BTN--> */}
      <nav className="md:hidden flex justify-between items-center">
        <div className="">
          <Link to="/">
            <img src="/fullLogo.png" alt="" className="w-40" />
          </Link>
        </div>
        <div onClick={toogleNavBar} className="space-y-2 cursor-pointer">
          <div
            className={`${genericHamburgerLine} ${
              showNavBar ? 'rotate-45 translate-y-3 opacity-50' : 'opacity-50'
            }`}
          ></div>
          <div
            className={`${genericHamburgerLine} ${
              showNavBar ? 'opacity-0' : 'opacity-50'
            }`}
          ></div>
          <div
            className={`${genericHamburgerLine} ${
              showNavBar ? '-rotate-45 -translate-y-3 opacity-50' : 'opacity-50'
            }`}
          ></div>
        </div>
      </nav>

      {/* <!-- MOBILE HAMBURGUER MENU CONTENT --> */}
      {showNavBar && (
        <div className="shadow-xl mx-auto py-10 rounded-lg bg-white absolute inset-x-0 z-10 w-3/4 md:w-2/5 mt-10">
          <ul className="grid gap-8 pt-1 text-blue-500 text-xl text-center font-bold">
            <li className="hover:text-gray-600 shadow-[0_0px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(30,144,255)] ease-out hover:translate-y-1 transition-all rounded w-14 mx-auto">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-600 shadow-[0_0px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(30,144,255)] ease-out hover:translate-y-1 transition-all rounded w-14 mx-auto">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-gray-600 shadow-[0_0px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(30,144,255)] ease-out hover:translate-y-1 transition-all rounded w-18 mx-auto">
              <Link to="/contacts">Contacts</Link>
            </li>
            <div className="flex justify-center my-4">
              <Pulse>
                <Link
                  to="/cars-list"
                  className="bg-blue-500 text-white py-3 px-10 hover:bg-blue-400 cursor-pointer"
                >
                  <button>FIND YOUR CAR</button>
                </Link>
              </Pulse>
            </div>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default NavBar
