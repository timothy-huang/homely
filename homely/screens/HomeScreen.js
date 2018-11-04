import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Image,
  AsyncStorage
} from 'react-native'

import Circle from '../components/Circle'
import Task from '../components/Task'
import DaysRemaining from '../components/DaysRemaining'
import DoneButton from '../components/DoneButton'
import PassTimeButton from '../components/PassTimeButton'

import * as firebase from 'firebase';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completedTask: false,
      circles: [],
      days: 3,
      late: false,
      user: null,
      userChore: 'none',
      loading: true
    }
    this.storeInfo = this.storeInfo.bind(this)

    var firebaseUsers = firebase.database().ref('/users');
    firebaseUsers.once('value').then(snapshot => {
      dict = snapshot.val()
      var userNames = new Array();
      for (var k1 in dict) {
        for (var k2 in dict[k1]) {
          if (k2 == 'name') {
            userNames.push(dict[k1][k2])
          }
        }
      }
      this.setState({ circles: userNames });
    })

    var that = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var userId = user.uid
        var firebaseCurrentUser = firebase.database().ref('/users/' + userId)
        firebaseCurrentUser.once('value').then(snapshot => {that.storeInfo(snapshot)})
      } else {
        // No user is signed in.
        console.log("no user signed in")
      }
    });
  }

  static navigationOptions = {
    title: 'Home',
  };

  decrementDay = () => {
    if (this.state.days == 0) {
      this.setState({
        late: true
      })
    } else {
      this.setState({
        days: this.state.days - 1
      })
    }
  }

  focusUser = (c) => {
    var cho = '';
    firebase.database().ref('/users/').once('value').then(snapshot => {
      var dict = snapshot.val();
      for (key in dict){
        if (dict[key].name == c) {
          cho = dict[key].chore
        }
      }
      this.setState({
        user: c,
        userChore: cho
      })
    })
  }

  storeInfo(snapshot){
    information = snapshot.val();
    currentUserName = snapshot.val().name;
    currentUserChore = snapshot.val().chore;
    this.setState({
      user: currentUserName,
      userChore: currentUserChore
    })
  }

  render() {
    const { circles, days, completedTask, late, user, userChore } = this.state

    return (
      <View style={styles.container}>
       
        <Image 
          style={styles.image}
          source={require('../assets/granite.jpg')} 
          />
        <View style={styles.container2}>
          <View style={styles.circleContainer}>
            {circles.map((c, i) => (
              <Circle key={i} name={c} focusUser={this.focusUser}/>
            ))}
          </View>
        </View>
        <Task user={user} task={userChore}/>
        <DaysRemaining days={days}/>
        <DoneButton completedTask={completedTask}/>
        <PassTimeButton decrementDay={this.decrementDay} late={late}/>
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
  smallContainer: {
    marginBottom: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    width: 100,
    height: 64,
    alignItems: 'center',
    marginBottom: 64
  },
  circleContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  image: {
    position: 'absolute',
    height: 1000,
    opacity: 0.30,
    flex: 1
  },
  button: {
    width: 269,
    height: 64,
    marginTop: 32,
    borderRadius: 5,
    backgroundColor: '#F0C808',
    alignItems: 'center',
    justifyContent: 'center'
  },
  grayedButton: {
    width: 269,
    height: 64,
    marginTop: 32,
    borderRadius: 5,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  blueText: {
    fontSize: 24,
    color: '#14191E'
  },
  grayText: {
    fontSize: 24,
    color: '#000000',
    opacity: 0.5
  },
  goldText: {
    fontSize: 24,
    color: '#F0C808'
  },
  largeText: {
    fontSize: 48,
    color: '#FFFFFF'
  },
  underline: {
    width: 150,
    borderStyle: 'solid',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#F0C808'
  }
});
