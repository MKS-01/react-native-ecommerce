import React from 'react';
import {RootSafeAreaView, RootView, RootScrollView} from '_styles/RootView';
import {
  Card,
  ImageView,
  Title,
  Description,
  Price,
  Button,
} from '_styles/productDetails';

const ProductDetails = ({route}) => {
  const {item} = route.params;
  console.log('check', item);
  return (
    <RootSafeAreaView>
      <RootScrollView>
        <RootView>
          <Card>
            <ImageView source={item.image} resizeMode="cover" />
          </Card>
          <Title align={'left'}>{item.title}</Title>
          <Description>{item.desc}</Description>
          <Price>{item.price}</Price>
          <Button>
            <Title align={'center'} color={'#ffffff'}>
              Buy Now
            </Title>
          </Button>
        </RootView>
      </RootScrollView>
    </RootSafeAreaView>
  );
};

export default ProductDetails;
