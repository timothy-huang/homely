import React, {Component} from 'react';
import { 
  View,
  Text, 
  StyleSheet
} from 'react-native'

export default class TaskAssignerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingText: true,
      tasks: ['Clean toilet', 'Take out trash', 'Wash dishes', 'Buy paper towels']
    };
    
    setTimeout(() => clearInterval(randomizer), 2200);

    var randomizer = setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 200);
    
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

