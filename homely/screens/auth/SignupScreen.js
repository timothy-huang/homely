import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { Header,Title,Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker } from 'native-base';
import * as firebase from 'firebase';

export default class SignupScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      name: "",
      email: "",
      password: ""
    }
  }

  signup() {
    this.setState({
      // When waiting for the firebase server show the loading indicator.
      loading: true
    });
    // Make a call to firebase to create a new user.
    firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password).then(() => {
        // then and catch are methods that we call on the Promise returned from
        // createUserWithEmailAndPassword
        alert('Your account was created!');
        this.setState({
          // Clear out the fields when the user logs in and hide the progress indicator.
          email: '',
          password: '',
          loading: false
        });
        firebase.database().ref("users").child(firebase.auth().currentUser.uid).set({
          chore: "null",
          name: this.state.name
        });
        this.props.navigation.navigate("Login");
    }).catch((error) => {
      // Leave the fields filled when an error occurs and hide the progress indicator.
      this.setState({
        loading: false
      });
      alert("Account creation failed: " + error.message );
    });
  }
  
  
  render() {
    return (
      <View style={{ paddingVertical: 20 }}>
    <Card>
      <FormLabel>Name</FormLabel>
      <FormInput placeholder="FirstName LastName..." autoCorrect={false} onChangeText={(text) => 
      this.setState({name: text})}></FormInput>
      <FormLabel>Email</FormLabel>
      <FormInput placeholder="Email address..." autoCapitalize='none' autoCorrect={false} keyboardType="email-address" onChangeText={(text) =>
      this.setState({email: text}) }/>
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." autoCapitalize='none' autoCorrect={false} onChangeText={(text) => 
      this.setState({password: text})}/>

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SIGN UP"
        onPress={() => this.signup()}
      />
      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="transparent"
        textStyle={{ color: "#bcbec1" }}
        title="Sign In"
        onPress={() => this.props.navigation.navigate("Login")}
      />
    </Card>
  </View>
    )
      }
      }