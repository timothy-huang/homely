import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native'

const Circle = ({ initials }) => (
    <View style={styles.circle}><Text style={styles.text}>{initials}</Text></View>
)

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