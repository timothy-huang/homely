import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native'

const DaysRemaining = ({ days }) => (
    <View style = {styles.smallContainer}>
          <Text style={styles.whiteText}>You have</Text>
          <Text style={styles.largeText}>{days}</Text>
          <Text style={styles.whiteText}>days left to complete it</Text>
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

export default DaysRemaining;