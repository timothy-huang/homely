import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity 
} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <View style={styles.circleContainer}>
            <View style={styles.circle}><Text>TH</Text></View>
            <View style={styles.circle}><Text>MK</Text></View>
            <View style={styles.circle}><Text>ML</Text></View>
            <View style={styles.circle}><Text>WJ</Text></View>
          </View>
        </View>
        <View style={styles.smallContainer}>
          <Text style={styles.goldText}>Your assignment is</Text>
          <Text style={styles.largeText}>trash</Text>
          <View style={styles.underline}></View>
        </View>
        <View style = {styles.smallContainer}>
          <Text style={styles.goldText}>You have</Text>
          <Text style={styles.largeText}>3</Text>
          <Text style={styles.goldText}>days left to complete it</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
        <Text style={styles.blueText}>Done</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01539B',
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
    justifyContent: 'center'
  },
  circleContainer: {
    flex: 1,
    flexDirection: 'row'
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
