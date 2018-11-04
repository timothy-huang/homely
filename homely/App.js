import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import TaskAssignerScreen from './screens/TaskAssigner';
import Loading from './screens/Loading';
import SignUp from './screens/SignUp';
import Login from './screens/Login';

const RootStack = createBottomTabNavigator (
  {
    TaskAssigner: TaskAssignerScreen,
    Home: HomeScreen,
    Loading: Loading,
    SignUp: SignUp,
    Login: Login
  },
  {
    initialRouteName: 'Loading',
  }
)

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}