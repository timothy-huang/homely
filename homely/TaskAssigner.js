import React, {Component} from 'react';
import { 
  View,
  Text, 
  StyleSheet
} from 'react-native'

export default class TaskAssignerScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>

          <Text>Task Assignment Screen</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#012E56',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

