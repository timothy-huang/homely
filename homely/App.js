import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import TaskAssignerScreen from './TaskAssigner';
import * as firebase from 'firebase';
import ApiKeys from './constants/ApiKeys'

import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyCvwLlNZ8E0FTqqs5wR12BE9WWpLb2GpMo",
    authDomain: "homely-956b9.firebaseapp.com",
    databaseURL: "https://homely-956b9.firebaseio.com",
    projectId: "homely-956b9",
    storageBucket: "homely-956b9.appspot.com",
    messagingSenderId: "321882547293"
  };
  firebase.initializeApp(config);

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

  constructor(props) {
    super(props);
  
    this.state = {};

    if (!firebase.apps.length) {firebase.initializeApp(ApiKeys.FirebaseConfig);}
  }
  render() {
    return <RootStack />;
  }
}
