import React from 'react';
import {RootSafeAreaView, RootView, RootScrollView} from '_styles/RootView';
import {
  Title,
  Container,
  CategoryContainer,
  CategoryCard,
  ImageView,
} from '_styles/homeScreen';
import Carousel from '_components/carousel';
import {useNavigation} from '@react-navigation/native';
import CurrentLocation from '_components/location';
// import GetCurrentLocation from '_utils/GeoLocation';

const home = () => {
  return (
    <RootSafeAreaView>
      <RootScrollView>
        <RootView>
          <CurrentLocation />
          <Container>
            <Carousel />
          </Container>
          <Container>
            <Title>Category</Title>
            <Category />
          </Container>
        </RootView>
      </RootScrollView>
    </RootSafeAreaView>
  );
};

const categoryData = [
  {
    id: 1,
    image: require('../../assets/images/category/adidas.jpg'),
    type: 'shoes',
  },
  {
    id: 2,
    image: require('../../assets/images/category/levis.jpg'),
    type: 'denim',
  },
];

const Category = () => {
  const navigation = useNavigation();

  return (
    <CategoryContainer>
      {categoryData.map((item) => {
        return (
          <CategoryCard
            key={item.id}
            onPress={() => {
              navigation.navigate('ProductList', {type: item.type});
            }}>
            <ImageView source={item.image} resizeMode="cover" />
          </CategoryCard>
        );
      })}
    </CategoryContainer>
  );
};

export default home;
