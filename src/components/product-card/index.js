import React from 'react';
import {CardContainer, ImageView, ProductTitle} from '_styles/product-card';

const ProductCard = () => {
  return (
    <CardContainer>
      <ImageView
        source={require('_assets/images/shoes.jpg')}
        resizeMode="contain"
      />
      <ProductTitle>Shoes</ProductTitle>
    </CardContainer>
  );
};

export default ProductCard;
