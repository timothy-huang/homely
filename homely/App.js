import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import TaskAssignerScreen from './screens/TaskAssigner';
// import * as firebase from 'firebase';
// import ApiKeys from './constants/ApiKeys'

const RootStack = createBottomTabNavigator (
  {
    TaskAssigner: TaskAssignerScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: 'TaskAssigner',
  }
)

export default class App extends React.Component {

  constructor(props) {
    super(props);

    // if (!firebase.apps.length) {firebase.initializeApp(ApiKeys.FirebaseConfig);}
  }
  render() {
    return <RootStack />; 
  }
}