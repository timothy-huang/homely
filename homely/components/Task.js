import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native'

const Task = ({ task, user }) => (
    <View style={styles.smallContainer}>
          <Text style={styles.whiteText}>{user} must</Text>
          <Text style={styles.largeText}>{task}</Text>
          <View style={styles.underline}></View>
    </View>
)

const styles = StyleSheet.create({
    smallContainer: {
      marginBottom: 32,
      alignItems: 'center',
      justifyContent: 'center',
    },
    whiteText: {
      fontSize: 24,
      color: '#F5FAFF'
    },
    largeText: {
      fontSize: 48,
      color: '#FFD509'
    }
})

export default Task;