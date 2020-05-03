import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Container, LocationText} from '_styles/location';
import Icon from 'react-native-vector-icons/Entypo';
import {scaleFont} from '_styles/mixins';
import GetCurrentLocation from '_utils/GeoLocation';

const locationIcon = (
  <Icon name="location-pin" size={scaleFont(35)} color="#900" />
);

const CurrentLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const currentLocation = GetCurrentLocation();
  }, []);

  return (
    <Container>
      {locationIcon}
      <LocationText>Bengaluru</LocationText>
    </Container>
  );
};

export default CurrentLocation;
