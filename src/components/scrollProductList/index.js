import React from 'react';
import {View, Text} from 'react-native';
import {HorizontalScrollView} from '_styles/scrollProductList';
import ProductCard from '../product-card';

const ScrollProductList = () => {
  return (
    <View style={{flex: 1}}>
      <HorizontalScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </HorizontalScrollView>
    </View>
  );
};

export default ScrollProductList;
