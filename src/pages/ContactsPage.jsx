import React, { useMemo } from 'react'
import MainLayout from '../layouts/MainLayout'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import Map from '../components/Map'

function ContactsPage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCHuyqO4vu5K94BGUsc1bdK_-YQTY0oFCQ',
  })

  if (!isLoaded) return <MainLayout>Loading Map...</MainLayout>

  return (
    <MainLayout>
      <Map></Map>
    </MainLayout>
  )
}

export default ContactsPage
