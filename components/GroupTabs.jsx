import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import POAP from '../screens/POAP';
import NFT from '../screens/NFT';
import ZuPass from '../screens/ZuPass';

const Tab = createMaterialTopTabNavigator();

export function GroupTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="POAP" component={POAP} />
      <Tab.Screen name="NFT" component={NFT} />
      <Tab.Screen name="ZuPass" component={ZuPass} />
    </Tab.Navigator>
  );
}
