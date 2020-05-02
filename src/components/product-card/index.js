import React from 'react';
import {
  CardContainer,
  ImageView,
  ProductDesc,
  BuyButton,
  BuyButtonText,
} from '_styles/product-card';
import {useNavigation} from '@react-navigation/native';

const ProductCard = () => {
  const navigation = useNavigation();
  return (
    <CardContainer
      onPress={() => {
        navigation.navigate('ProductDetails');
      }}>
      <ImageView
        source={require('_assets/images/shoes.jpg')}
        resizeMode="cover"
      />
      <ProductDesc>Shoes</ProductDesc>
      <ProductDesc weight={'700'}>$200</ProductDesc>
      <ProductDesc color={'grey'} size={12}>
        added 2h ago
      </ProductDesc>
      <BuyButton>
        <BuyButtonText>Buy Now</BuyButtonText>
      </BuyButton>
    </CardContainer>
  );
};

export default ProductCard;
