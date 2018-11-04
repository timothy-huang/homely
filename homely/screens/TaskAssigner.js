import React, {Component} from 'react';
import { 
  View,
  Text, 
  StyleSheet
} from 'react-native'

import * as firebase from 'firebase';
import ApiKeys from '../constants/ApiKeys'

firebase.initializeApp(ApiKeys.FireBaseConfig);

export default class TaskAssignerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingText: false,
      tasks: []
    };
    
    setTimeout(() => clearInterval(randomizer), 2200);

    var randomizer = setInterval(() => (
      this.setState(previousState => (
      { isShowingText: !previousState.isShowingText }
      ))
    ), 300);

    var firebaseChores = firebase.database().ref('/chores');
    firebaseChores.once('value').then(snapshot => {
      // snapshot.val() is the dictionary with all your keys/values from the '/store' path
      dict = snapshot.val()
      var chore_values = new Array();
      for (var k1 in dict) {
        for (var k2 in dict[k1]) {
            if (k2 == 'task') {
              chore_values.push(dict[k1][k2]);
            }
        }
      }
      this.setState({ tasks: chore_values });
    })
    
  }

  render() {
    const { tasks } = this.state

    if (!this.isShowingText){
      return (
        <View style={styles.container}></View>
      );
    } else {
      var task = tasks[Math.floor(Math.random() * 4)];
      return (
        <View style={styles.container}>
          <Text style={styles.whiteText}>{task}</Text>
        </View>
      );
    }    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#012E56',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    fontSize: 24,
    color: '#F5FAFF'
  }
});

