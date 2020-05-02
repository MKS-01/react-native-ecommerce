import React from 'react';
import {View, Text} from 'react-native';
import {
  HorizontalScrollView,
  ItemContainer,
  ImageView,
  ImageText,
  CarouselContainer,
} from '_styles/carousel';

const Carousel = () => {
  return (
    <CarouselContainer>
      <HorizontalScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </HorizontalScrollView>
    </CarouselContainer>
  );
};

function Item() {
  return (
    <ItemContainer>
      <ImageView
        source={require('_assets/images/iwatch.jpg')}
        resizeMode="contain"
      />
      <ImageText>iWatch</ImageText>
    </ItemContainer>
  );
}

export default Carousel;
