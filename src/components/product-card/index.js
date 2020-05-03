import React from 'react';
import {
  CardContainer,
  ImageView,
  ProductDesc,
  BuyButton,
  BuyButtonText,
} from '_styles/product-card';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';

const ProductCard = ({data}) => {
  const navigation = useNavigation();
  const {item} = data;
  // console.log('check', item);
  return (
    <View>
      <CardContainer
        key={item.id}
        onPress={() => {
          navigation.navigate('ProductDetails', {item: item});
        }}>
        <ImageView source={item.image} resizeMode="cover" />
        <ProductDesc>{item.title}</ProductDesc>
        <ProductDesc weight={'700'}>{item.price}</ProductDesc>
        <ProductDesc color={'grey'} size={12}>
          added 2h ago
        </ProductDesc>
        <BuyButton>
          <BuyButtonText>Buy Now</BuyButtonText>
        </BuyButton>
      </CardContainer>
    </View>
  );
};

export default ProductCard;
