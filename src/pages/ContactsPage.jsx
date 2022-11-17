import React, { useMemo } from 'react'
import MainLayout from '../layouts/MainLayout'
import { useLoadScript } from '@react-google-maps/api'
import Map from '../components/Map'
import ContactForm from '../components/ContactForm'

function ContactsPage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCHuyqO4vu5K94BGUsc1bdK_-YQTY0oFCQ',
  })

  if (!isLoaded) return <MainLayout>Loading Map...</MainLayout>

  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-12 my-20 grid grid-cols-2">
        <div className="flex justify-start">
          <Map></Map>
        </div>
        <div>
         <ContactForm/>
        </div>
      </section>
    </MainLayout>
  )
}

export default ContactsPage
