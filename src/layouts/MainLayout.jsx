import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function MainLayout(props) {
  return (
    <main className="font-oswald h-screen flex flex-col relative">
      <NavBar />
        {props.children}
      <Footer />
    </main>
  )
}

export default MainLayout
