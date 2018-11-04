import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createTabNavigator, TabBarBottom } from 'react-navigation';
import Colors from '../constants/Colors';
// import TestScreen from '../screens/TestScreen';
import TaskAssignerScreen from "../screens/TaskAssigner"
import HomeScreen from "../screens/HomeScreen"

export default createTabNavigator(
  {
    Home: {screen: HomeScreen }, 
    TaskAssigner: {screen: TaskAssignerScreen}
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;

        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);