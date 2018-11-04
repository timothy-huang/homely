import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'


class DoneButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }

  pressedDone = () => {
    this.setState({
      done: true
    })
  }

  render () {
    const { done } = this.state;
    if (done) {
      return (
      <View style={styles.grayedButton}>
          <Text style={styles.grayText}>Done</Text>
      </View>
      )
    }
    return (
      <TouchableOpacity
          style={styles.button}
          onPress={() => this.pressedDone()}
          >
          <Text style={styles.blueText}>Done</Text>
        </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
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
  }
})

export default DoneButton;
