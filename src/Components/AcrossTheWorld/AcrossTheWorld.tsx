import React from 'react'
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import InfoWindowPopUp from './InfoWindowPopUp';
// import 'dotenv/config';

const containerStyle = {
   width: '100%',
   height: '650px'
};

function AcrossTheWorld() {

   const AcrosstheWorldContent = {
      h2Header: "We Work Across the World",
      h5Header: "We provide cutting edge web and mobile app solutions",
      Places: [{
         position: {
            lat: 31.0461,
            lng: 34.8516,
         },
         Name: "Ban Shan"
      }, {
         position: {
            lat: 40.7128,
            lng: -74.0060,
         },
         Name: "Archana Tiwari"
      }, {
         position: {
            lat: 51.5072,
            lng: 0.1276,
         },
         Name: "Rodge"
      }, {
         position: {
            lat: 25.2048,
            lng: 55.2708,
         },
         Name: "Rohit Kumar"
      }, {
         position: {
            lat: 25.2048,
            lng: 55.2708,
         },
         Name: "Rohit Kumar"
      }, {
         position: {
            lat: 4.8604,
            lng: -58.9302,
         },
         Name: "Lee"
      }, {
         position: {
            lat: 50.1109,
            lng: 8.6821,
         },
         Name: "Michal"
      }, {
         position: {
            lat: 43.7228,
            lng: 10.4017,
         },
         Name: "Carlos"
      }, {
         position: {
            lat: 1.3521,
            lng: 103.8198,
         },
         Name: "Alex Nee"
      }],
      WorldBound: {
         east: 179.9999,
         north: 89,
         south: -89,
         west: -179.9999
      },
   }
   const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: process.env.REACT_APP_MAP_API,
   })

   const onLoad = React.useCallback(function callback(map) {
      var latlngbounds = new google.maps.LatLngBounds();
      for (var i = 0; i < AcrosstheWorldContent?.Places.length; i++) {
         latlngbounds.extend(AcrosstheWorldContent?.Places[i].position);
      }
      map.fitBounds(latlngbounds);
   }, [])

   return isLoaded ? (
      <section className="across-the-world-main">
         <div className="container-fluid">
            <div className="con-head text-center">
               <h2>{AcrosstheWorldContent.h2Header}</h2>
               <h5>{AcrosstheWorldContent.h5Header}</h5>
            </div>
            <div className="map">
               <GoogleMap
                  zoom={0}
                  mapContainerStyle={containerStyle}
                  onLoad={onLoad}
                  options={{
                     fullscreenControl: false, zoomControl: false, gestureHandling: 'greedy', restriction: {
                        latLngBounds: AcrosstheWorldContent?.WorldBound,
                        strictBounds: true,
                     }
                  }}
               >
                  {
                     AcrosstheWorldContent.Places && AcrosstheWorldContent.Places.map((i) => (
                        <InfoWindowPopUp position={i.position} Name={i.Name} />
                     ))
                  }
               </GoogleMap>
            </div>
         </div>
      </section>
   ) : <></>
}

export default React.memo(AcrossTheWorld)