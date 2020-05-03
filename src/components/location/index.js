import React from 'react';
import {View, Text} from 'react-native';
import {Container} from '_styles/location';
import Icon from 'react-native-vector-icons/FontAwesome';
const myButton = (
  <Icon.Button
    name="facebook"
    backgroundColor="#3b5998"
    onPress={this.loginWithFacebook}>
    Login with Facebook
  </Icon.Button>
);

const CurrentLocation = () => {
  return (
    <Container>
      {myButton}
      <Text>s</Text>
    </Container>
  );
};

export default CurrentLocation;
