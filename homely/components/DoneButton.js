import React from 'react';
import { 
  StyleSheet, 
  Text,
  TouchableOpacity
} from 'react-native'

const DoneButton = ({ decrementDay }) => (
    <TouchableOpacity
          style={styles.button}
          onPress={() => decrementDay()}
        >
        <Text style={styles.blueText}>Done</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        width: 269,
        height: 64,
        marginTop: 32,
        borderRadius: 100,
        backgroundColor: '#F0C808',
        alignItems: 'center',
        justifyContent: 'center'
      },
      blueText: {
        fontSize: 24,
        color: '#14191E'
      }
})

export default DoneButton;