import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Image
} from 'react-native'

import Circle from './components/Circle'
import Task from './components/Task'
import DaysRemaining from './components/DaysRemaining'
import DoneButton from './components/DoneButton'


export default class Homescreen extends Component {
  state = {
    circles: ['TH', 'MK', 'ML', 'WJ'],
    days: 3
  }

  decrementDay = () => {
    this.setState({
      days: this.state.days - 1
    })
  }

  render() {
    const { circles, days } = this.state

    return (
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={require('./assets/granite.jpg')} 
          />
        <View style={styles.container2}>
          <View style={styles.circleContainer}>
            {circles.map((c, i) => (
              <Circle key={i} initials={c} />
            ))}
          </View>
        </View>
        <Task task={'Clean'}/>
        <DaysRemaining days={days}/>
        <DoneButton decrementDay={this.decrementDay}/>
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
    borderRadius: 100,
    backgroundColor: '#F0C808',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 100,
    backgroundColor: '#7DCE82',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8
  },
  goldText: {
    fontSize: 24,
    color: '#F0C808'
  },
  blueText: {
    fontSize: 24,
    color: '#01539B'
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
