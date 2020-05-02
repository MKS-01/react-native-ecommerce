import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {RootSafeAreaView, RootView} from '_styles/RootView';
import {Title, ProductContainer} from '_styles/homeScreen';
import ProductCard from '_components/product-card';
const home = () => {
  return (
    <RootSafeAreaView>
      <RootView>
        <Title>Product Title</Title>
        <ProductList />
        <ProductList />
      </RootView>
    </RootSafeAreaView>
  );
};

// function Product() {
//   return (
//     <CardContainer>
//       <ImageView
//         source={require('_assets/images/shoes.jpg')}
//         resizeMode="contain"
//       />
//       <Text>Shoes</Text>
//     </CardContainer>
//   );
// }

const ProductList = () => {
  return (
    <ProductContainer>
      <ProductCard />
      <ProductCard />
    </ProductContainer>
  );
};

export default home;
