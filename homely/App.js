import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import TaskAssignerScreen from './screens/TaskAssigner';
import TaskPage from './screens/TaskPage';
import * as firebase from 'firebase';
import ApiKeys from './constants/ApiKeys'

// firebase.initializeApp(ApiKeys.FireBaseConfig);

const RootStack = createBottomTabNavigator (
  {
    TaskAssigner: TaskAssignerScreen,
    Home: HomeScreen,
    Tasks: TaskPage
  },
  {
    initialRouteName: 'Tasks',
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
