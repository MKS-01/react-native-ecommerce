import React from 'react';
import {RootSafeAreaView, RootView, RootScrollView} from '_styles/RootView';
import {
  Title,
  Container,
  CategoryContainer,
  CategoryCard,
  ImageView,
} from '_styles/homeScreen';
import ScrollProductList from '_components/scrollProductList';
import {useNavigation} from '@react-navigation/native';

const home = () => {
  return (
    <RootSafeAreaView>
      <RootScrollView>
        <RootView>
          <Container>
            <ScrollProductList />
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

const Category = () => {
  const navigation = useNavigation();

  return (
    <CategoryContainer>
      <CategoryCard
        onPress={() => {
          navigation.navigate('ProductList');
        }}>
        <ImageView
          source={require('_assets/images/shoes.jpg')}
          resizeMode="contain"
        />
      </CategoryCard>
      <CategoryCard
        onPress={() => {
          navigation.navigate('ProductList');
        }}>
        <ImageView
          source={require('_assets/images/jeans.jpg')}
          resizeMode="stretch"
        />
      </CategoryCard>
    </CategoryContainer>
  );
};

export default home;
