import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Image
} from 'react-native'

import Circle from '../components/Circle'
import Task from '../components/Task'
import DaysRemaining from '../components/DaysRemaining'
import DoneButton from '../components/DoneButton'
import PassTimeButton from '../components/PassTimeButton'


export default class HomeScreen extends Component {
  state = {
    completedTask: false,
    circles: ['Timothy Huang', 'Manan Khattar', 'Mulan Zhao'],
    days: 3,
    late: false,
    user: 'Timothy Huang'
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
    this.setState({
      user: c
    })
  }

  render() {
    const { circles, days, completedTask, late, user } = this.state
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
        <Task user={user} task={'Clean'}/>
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
