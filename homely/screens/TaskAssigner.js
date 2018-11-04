import React, {Component} from 'react';
import { 
  View,
  Text, 
  StyleSheet,
  Image
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
    
    // setTimeout(() => clearInterval(randomizer), 4800);

    // var randomizer = setInterval(() => (
    //   this.setState(previousState => (
    //   { isShowingText: !previousState.isShowingText }
    //   ))
    // ), 300);

    var firebaseChores = firebase.database().ref('/chores');
    firebaseChores.once('value').then(snapshot => {
      // snapshot.val() is the dictionary with all your keys/values from the '/chores' path
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
      var users = firebase.database().ref('/users')
      users.once('value').then(snapshot => {
        var dict = snapshot.val();
        var listUserIds = new Array();
        for (var key in dict) {
          listUserIds.push(key)
        }
        while (chore_values.length != 0 && listUserIds.length != 0) {
          var randomIndex = Math.floor(Math.random()*chore_values.length);
          firebase.database().ref('/users/' + listUserIds.pop()).update({
            chore: chore_values.splice(randomIndex, 1)[0]
          })
        }
      })
    })
    
  }

  render() {
    const { tasks } = this.state

    // if (!this.state.isShowingText){
    //   return (
    //     <View style={styles.container}>
    //       <Image 
    //         style={styles.image}
    //         source={require('../assets/granite.jpg')} 
    //       />
    //     </View>
    //   );
    // } else {
    // var task = tasks[Math.floor(Math.random() * 4)];
    return (
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={require('../assets/granite.jpg')} 
        />
        <Text style={styles.whiteText}>Assigned new tasks</Text>
      </View>
    );
    // }   
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
  },
  image: {
    position: 'absolute',
    height: 1000,
    opacity: 0.30,
    flex: 1
  }
});

