import React from 'react';
import {FlatList} from 'react-native';
import {RootSafeAreaView, RootView, RootScrollView} from '_styles/RootView';
import ProductCard from '_components/product-card';
import {shoesData, denimData} from './data';
// import CurrentLocation from '_components/location';

const ProductList = ({route}) => {
  const {type} = route.params;
  return (
    <RootSafeAreaView>
      <RootView>
        {/* <CurrentLocation /> */}
        <List type={type} />
      </RootView>
    </RootSafeAreaView>
  );
};

const List = (props) => {
  const {type} = props;

  return (
    <FlatList
      data={type === 'shoes' ? shoesData : denimData}
      renderItem={(data) => <ProductCard data={data} />}
      keyExtractor={(data) => data.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ProductList;
