import React, { useEffect } from 'react';
import { useState } from 'react';
import {GoogleMap, useJsApiLoader, MarkerF, InfoWindowF} from '@react-google-maps/api';
import { Container } from '@mui/material';
import HouseInfo from './HouseInfo';
import CreateRentApp from './CreateRentApp';

function Map() {
  const [activeMarker, setActiveMarker] = useState(null);
  const [openInfo, setOpenInfo] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_DOMAIN, {
      headers: {
        'Access-Control-Allow-Credentials' : true,
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET',
        'Access-Control-Allow-Headers':'application/json',
    },
    }).then(res => res.json()).then(data => setData(data));
  }, []);
  
	const toggleInfo = () => setOpenInfo(!openInfo);

  const handleActiveMarker = (id) => {
    if (id === activeMarker) {
      return;
    }
    setActiveMarker(id);
    setOpenInfo(!openInfo);
  }

  const center = {lat: 49.8326597, lng: 23.9996643};

  const mapOptions = {
    fullscreenControl: false,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
    libraries: ['places']
  })
  if (!isLoaded) {
    return 'Loading';
  }


  return (
    <Container style={{width: '90vw', height: '65vh'}}>
      <GoogleMap 
        center={center} 
        zoom={12} 
        mapContainerStyle={{width: '100%', height: '100%', marginTop: '50px', display: 'flex', justifyContent: 'center'}} 
        options={mapOptions}>
        {data.map((item) => {
          return (
            <MarkerF 
            key={item._id} 
            position={item.position}
            onClick={() => handleActiveMarker(item)}
            icon={{
              url: '../assets/vite.svg'
            }}
          >
            {activeMarker === item.id ? 
              <InfoWindowF onCloseClick={setActiveMarker(null)}>
                <div style={{width: '50px', height: '10px'}}>{item.name}</div>
              </InfoWindowF>
              : null
            }
          </MarkerF>
          )
        })}
      </GoogleMap>
      <CreateRentApp/>
      <HouseInfo open={openInfo} onClose={toggleInfo} data={activeMarker}/>
    </Container>
  )
}

export default Map