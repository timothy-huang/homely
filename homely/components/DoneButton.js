import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  TouchableOpacity
} from 'react-native'


class DoneButton extends Component {

  render () {
    if (this.props.completedTask) {
      return (
        <TouchableOpacity 
          style={styles.grayedButton}
          >
          <Text style={styles.grayedText}>Done</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity 
          style={styles.button}
          onClick={() => this.props.completedTask = true}
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