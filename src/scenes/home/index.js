import React from 'react';
import {RootSafeAreaView, RootView, RootScrollView} from '_styles/RootView';
import {Title, ProductContainer, Container} from '_styles/homeScreen';
import ProductCard from '_components/product-card';
import ScrollProductList from '_components/scrollProductList';
const home = () => {
  return (
    <RootSafeAreaView>
      <RootScrollView>
        <RootView>
          <Container>
            <Title>Product Title</Title>
            <ScrollProductList />
          </Container>
          <Container>
            <Title>Product Title</Title>
            <ProductList />
            <ProductList />
          </Container>
        </RootView>
      </RootScrollView>
    </RootSafeAreaView>
  );
};

const ProductList = () => {
  return (
    <ProductContainer>
      <ProductCard />
      <ProductCard />
    </ProductContainer>
  );
};

export default home;
