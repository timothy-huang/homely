import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity
} from 'react-native'



const Circle = ({ name, focusUser }) => {
    var initials = name.match(/\b(\w)/g).join('');
    return (
        <TouchableOpacity
            style={styles.circle}
            onPress={() => focusUser(name)}
            >
            <Text style={styles.text}>{initials}</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    text: {
        fontSize: 24
    },
    circle: {
        width: 64,
        height: 64,
        borderRadius: 100,
        backgroundColor: '#0987F6',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8
      }
})

export default Circle;