import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class TaskCreation_Background extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
        <View style = {styles.container}>
          <Text style = {styles.titleText}>Household Chores</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333232',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    color: '#B7B7B7',
    position: 'absolute',
    left: 100,
    top: 75
  }
});
