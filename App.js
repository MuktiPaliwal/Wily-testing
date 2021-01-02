import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchScreen from './screens/SearchScreen'
import TransactionScreen from './screens/TransactionScreen'

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
      return(
          <AppContainer/>
      )
  }
}

const TabNavigator = createBottomTabNavigator({
  TransactionScreen: {screen: TransactionScreen},
  SearchScreen: {screen: SearchScreen}
})

const AppContainer = createAppContainer(TabNavigator);
