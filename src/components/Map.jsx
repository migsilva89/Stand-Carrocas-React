import React, {useMemo} from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
function Map() {
  const center = useMemo(() => ({ lat: 41.2646, lng: -8.349 }), [])

  return (
    <GoogleMap zoom={12} center={center} mapContainerClassName="w-1/2 h-96">
      <Marker position={center} />
    </GoogleMap>
  )
}

export default Map
