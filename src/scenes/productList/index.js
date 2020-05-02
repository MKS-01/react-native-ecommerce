import React from 'react';
import {View, Text} from 'react-native';
import {RootSafeAreaView, RootView, RootScrollView} from '_styles/RootView';
import ProductCard from '_components/product-card';
const ProductList = () => {
  return (
    <RootSafeAreaView>
      <RootScrollView>
        <RootView>
          <ProductCard />
        </RootView>
      </RootScrollView>
    </RootSafeAreaView>
  );
};

export default ProductList;
