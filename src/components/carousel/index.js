import React from 'react';
import {
  HorizontalScrollView,
  ItemContainer,
  ImageView,
  ImageText,
  CarouselContainer,
} from '_styles/carousel';

const data = [
  {
    id: 1,
    image: require('../../assets/images/apple/iwatch.jpg'),
    title: 'iWatch',
  },
  {
    id: 2,
    image: require('../../assets/images/apple/iPhone.jpg'),
    title: 'iPhone',
  },
  {
    id: 3,
    image: require('../../assets/images/apple/iPadPro.jpg'),
    title: 'iPad Pro',
  },
  {
    id: 4,
    image: require('../../assets/images/apple/macbookPro.jpg'),
    title: 'Macbook Pro',
  },
  {
    id: 5,
    image: require('../../assets/images/apple/airPod.jpg'),
    title: 'AirPods Pro',
  },
];

const Carousel = () => {
  return (
    <CarouselContainer>
      <HorizontalScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}>
        {data.map((item) => {
          return <Item data={item} key={item.id} />;
        })}
      </HorizontalScrollView>
    </CarouselContainer>
  );
};

function Item(item) {
  return (
    <ItemContainer>
      <ImageView source={item.data.image} resizeMode="contain" />
      <ImageText>{item.data.title}</ImageText>
    </ItemContainer>
  );
}

export default Carousel;
