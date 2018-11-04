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
      isShowingText: true,
      tasks: []
    };
    
    setTimeout(() => clearInterval(randomizer), 2200);

    var randomizer = setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 200);

    var firebaseChores = firebase.database().ref('/chores');
    firebaseChores.once('value').then(snapshot => {
      // snapshot.val() is the dictionary with all your keys/values from the '/store' path
      dict = snapshot.val()
      var chore_values = new Array();
      for (var key in dict) {
          chore_values.push(dict[key]);
      }
      this.setState({ tasks: chore_values });
    })
    
  }

  render() {
    const { tasks } = this.state
    if (!this.state.isShowingText) {
      return(
        <View style={styles.container}>
        </View>
      )
    }
    var task = tasks[Math.floor(Math.random() * 4)];
    return (
      <View style={styles.container}>
        <Text style={styles.whiteText}>{task}</Text>
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
  },
  whiteText: {
    fontSize: 24,
    color: '#F5FAFF'
  }
});

