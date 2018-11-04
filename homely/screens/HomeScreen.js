import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Image
} from 'react-native'

import Circle from '../components/Circle'
import UserTaskComponent from '../components/UserTaskComponent'

export default class HomeScreen extends Component {
  state = {
    currentUser: null,
    circles: ['TH', 'MK', 'ML', 'WJ']
  }

  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { circles } = this.state

    return (
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={require('../assets/granite.jpg')} 
          />
        <View style={styles.container2}>
          <View style={styles.circleContainer}>
            {circles.map((c, i) => (
              <Circle key={i} initials={c} />
            ))}
          </View>
        </View>
        <UserTaskComponent user={0}/>
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
