import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '_scenes/home';
import AboutScreen from '_scenes/about';
import ProductListScreen from '_scenes/productList';
import ProductDetailsScreen from '_scenes/productDetails';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function RootTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

function Home() {
  return (
    <HomeStack.Navigator initialRouteName="Feed" headerMode="none">
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="ProductList" component={ProductListScreen} />
      <HomeStack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
      />
    </HomeStack.Navigator>
  );
}

const AppNavigator = RootTabs;

export default AppNavigator;
