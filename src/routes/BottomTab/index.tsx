import React from 'react';

import {BottomTabBar, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../../screens/Home';
import Extracts from '../../screens/Extracts';
import Cards from '../../screens/Cards';
import Graphic from '../../screens/Graphic';


const Tab = createBottomTabNavigator();


const BottomTab: React.FC = () => {
  return (
    <Tab.Navigator 
    initialRouteName='Home'
    
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Graphic" component={Graphic} />
      <Tab.Screen name="Cards" component={Cards} />
      <Tab.Screen name="Extracts" component={Extracts} />
    </Tab.Navigator>
  );
};

export default BottomTab;
