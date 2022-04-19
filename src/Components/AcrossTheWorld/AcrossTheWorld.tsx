import React from 'react'
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
   width: '100%',
   height: '650px'
};
const center = {
   lat:22,
   lng:22
}
const Places = [{
   lat: 43.7228,
   lng: 10.4017
}, {
   lat: 25.27,
   lng: -133.7751
}, {
   lat: 37.092,
   lng: 95.523
}, {
   lat: 56.745,
   lng: 106.523
}]

function MyComponent() {
   const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyBYEu3SQcQzvWTCJ5FPiytYHCSCg9T6ETU"
   })

   const [map, setMap] = React.useState(null)

   const onLoad = React.useCallback(function callback(map) {
      var latlngbounds = new google.maps.LatLngBounds();
      for (var i = 0; i < Places.length; i++) {
        latlngbounds.extend(Places[i]);
      }
      map.fitBounds(latlngbounds);

      setMap(map)
   }, [])
   const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])

console.log(map)
   return isLoaded ? (
      <div className='col-12' style={{ width: "100%", height: "100%" }}>
         <h3 className='text-center'>Our Foot Prints</h3>
         <GoogleMap
            zoom={0}
            mapContainerStyle={containerStyle}
            onLoad={onLoad}
            
         >
            { /* Child components, such as markers, info windows, etc. */}
            {
               Places && Places.map((i) => (
                  <Marker position={i}>
                     <InfoWindow >
                        <span>Pragetxian</span>
                     </InfoWindow>
                  </Marker>

               ))
            }

         </GoogleMap>
      </div>
   ) : <></>
}

export default React.memo(MyComponent)