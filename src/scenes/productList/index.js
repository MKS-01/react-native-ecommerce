import React from 'react';
import {FlatList} from 'react-native';
import {RootSafeAreaView, RootView, RootScrollView} from '_styles/RootView';
import ProductCard from '_components/product-card';
import {shoesData, denimData} from './data';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

const ProductList = ({route}) => {
  const {type} = route.params;

  return (
    <RootSafeAreaView>
      <RootView>
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
      // data={shoesData}
      renderItem={(data) => <ProductCard data={data} />}
      keyExtractor={(data) => data.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ProductList;
