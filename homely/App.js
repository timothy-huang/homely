import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import TaskAssignerScreen from './TaskAssigner';
import * as firebase from 'firebase';
import ApiKeys from './constants/ApiKeys'

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

  constructor(props) {
    super(props);
  
    this.state = {};

    if (!firebase.apps.length) {firebase.initializeApp(ApiKeys.FirebaseConfig);}
  }
  render() {
    return <RootStack />;
  }
}