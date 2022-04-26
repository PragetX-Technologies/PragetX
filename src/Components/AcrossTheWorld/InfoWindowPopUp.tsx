import { InfoWindow, Marker } from '@react-google-maps/api'
import React, { useState } from 'react'

function InfoWindowPopUp(props: { position: any; Name: any }) {
  const [Show, setShow] = useState(false)
  const { position, Name } = props
  return (
    <div>
      <Marker position={position} onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>
        {
          Show && <InfoWindow >
            <span>{Name}</span>
          </InfoWindow>
        }
      </Marker>
    </div>
  )
}

export default InfoWindowPopUp