import React from 'react';
import {FlatList} from 'react-native';
import {RootSafeAreaView, RootView, RootScrollView} from '_styles/RootView';
import ProductCard from '_components/product-card';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const ProductList = () => {
  return (
    <RootSafeAreaView>
      <RootView>
        <List />
      </RootView>
    </RootSafeAreaView>
  );
};

function List() {
  return (
    <FlatList
      data={DATA}
      renderItem={({data}) => <ProductCard data={data} />}
      keyExtractor={(data) => data.id}
    />
  );
}

export default ProductList;
