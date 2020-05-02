import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '_scenes/home';
import AboutScreen from '_scenes/about';

const Tab = createBottomTabNavigator();

function RootTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

const AppNavigator = RootTabs;

export default AppNavigator;
