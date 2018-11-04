import React from "react";
import { View, Text, TouchableOpacity, AppRegistry, AsyncStorage, ToolbarAndroid, ActivityIndicator } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { Header,Container,Title, Content, List, ListItem, InputGroup, Input, Icon, Picker } from 'native-base';
import * as firebase from 'firebase';

export default class Login extends React.Component {

  constructor (props) {
    super(props)
    
    this.state = {
      loading: false,
      email: "", 
      password: ""
    }
  }

  login(){
    this.setState({
      loading: true
    });
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((userData) => 
    {
      this.setState({
        loading: false
      });
      // alert('Successfully logged in!');
      AsyncStorage.setItem('userData', JSON.stringify(userData));
      this.props.navigation.navigate("SignedIn");
    }).catch((error) =>
    {
      this.setState({
        loading: false
      });
      // alert('Login failed. Please try again'+error);
    });
  }
  
  render() {

      if (this.state.loading == true) {
      <View>
      <ActivityIndicator size="large"/>
      </View> }

    return (
    <View style={{ paddingVertical: 20 }}>
    <Card>
    <FormLabel>Email</FormLabel>
    <FormInput placeholder="Email address..." autoCapitalize='none' autoCorrect={false} keyboardType="email-address" onChangeText={(text) =>
    this.setState({email: text}) }/>
    <FormLabel>Password</FormLabel>
    <FormInput secureTextEntry placeholder="Password..." autoCapitalize='none' autoCorrect={false} onChangeText={(text) => 
    this.setState({password: text})}/>

    <Button
    buttonStyle={{ marginTop: 20 }}
    backgroundColor="#03A9F4"
    title="SIGN IN"
    onPress={() => this.login()}
  />

    <TouchableOpacity style={{paddingTop: 10, }} 
    onPress={() => this.props.navigation.navigate("SignUp")}>
  <Text style={{color: 'blue', textAlign: "center"}}>
    Create An Account!
  </Text>
</TouchableOpacity>

    </Card>
</View>
    )
  }}