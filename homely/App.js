import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import TaskAssignerScreen from './TaskAssigner';

const RootStack = createBottomTabNavigator(
  {
    TaskAssigner: TaskAssignerScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: 'TaskAssigner',
  }
)

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}