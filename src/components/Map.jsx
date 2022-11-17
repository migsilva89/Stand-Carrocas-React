import React, { useMemo } from 'react'
import { GoogleMap, MarkerF } from '@react-google-maps/api'

function Map() {
  const center = useMemo(() => ({ lat: 41.2646, lng: -8.349 }), [])

  return (
    <GoogleMap zoom={13} center={center} mapContainerClassName="w-full h-96 rounded-xl">
      <MarkerF position={center} />
    </GoogleMap>
  )
}

export default Map
