import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Container, LocationText, TextView} from '_styles/location';
import Icon from 'react-native-vector-icons/Entypo';
import {scaleFont} from '_styles/mixins';

import GetLocation from 'react-native-get-location';

const locationIcon = (
  <Icon name="location-pin" size={scaleFont(35)} color="#900" />
);

async function geoCoding(lat, long) {
  try {
    let response = await fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
        lat +
        ',' +
        long +
        '&key=AIzaSyCud3MQ-YpiRXuF29rrHnPdULNwqdHiU_c',
    );
    let json = await response.json();
    return json.results;
  } catch (error) {
    console.error(error);
  }
}

const CurrentLocation = () => {
  const [location, setLocation] = useState('Bengaluru');
  const [latLang, setLatLang] = useState(null);

  useEffect(() => {
    const locationAsync = async () => {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      })
        .then((currentLocation) => {
          setLatLang({
            lat: currentLocation.latitude,
            long: currentLocation.longitude,
          });
        })
        .catch((error) => {
          const {code, message} = error;
          console.warn(code, message);
        });
      if (latLang) {
        let geoCode = await geoCoding(latLang.lat, latLang.long);

        console.log('current.....', geoCode[0].formatted_address);
        setLocation(geoCode[0].formatted_address);
      }
    };

    locationAsync();
  }, []);

  return (
    <Container>
      {locationIcon}
      <TextView>
        <LocationText>{location}</LocationText>
      </TextView>
    </Container>
  );
};

export default CurrentLocation;
