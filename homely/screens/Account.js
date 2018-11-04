import {
    AsyncStorage,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
  } from 'react-native';
  import React, {Component} from 'react';
  import * as firebase from 'firebase';

  const accountStyles = StyleSheet.create({
    email_container: {
      padding: 20
    },
    email_text: {
      fontSize: 18
    }
  });

  export default class Account extends React.Component {
      constructor (props) {
          super(props)
          this.state = {
              user:null,
              loading: true
          }
      }

      componentWillMount() {
          AsyncStorage.getItem('userData').then((user_data_json) => {
              let userData = JSON.parse(user_data_json);
              this.setState({
                  user:userData,
                  loading:false
              });
          });
      }

    render() {
        // alert(this.state.userID);
        // firebase.database().ref('users/' + this.state.userID).once('value').then(function(snapshot) {
        //     var userName = snapshot.val().name;
        //     var userChore = snapshot.val().chore;
        // })
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
            var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
          });

      // console.log("loading user",this.state.user,this.state.loading);
    return (
            /* <View style={accountStyles.email_container}>
                <Text style={accountStyles.email_text}>{this.state.user.uid}</Text>
            </View> */
            <View style={{paddingTop: 50}}>
            {/* <Button
            backgroundColor="#FFFFFF" onPress={() => this.logout()} title="LOG OUT" height='250'>
            </Button> */}

                <TouchableOpacity style={{paddingTop: 10, }} 
                    onPress={() => this.logout()}>
                <Text style={{color: 'blue', textAlign: "center"}}>
                    LogOut
                </Text>
</TouchableOpacity>

            </View>

    );
  }


  logout() {
    // logout, once that is complete, return the user to the login screen.
    AsyncStorage.removeItem('userData').then(() => {
      firebase.auth().signOut().then(() => {
        this.props.navigation.navigate("SignedOut");
        });
      });  
    }

  }

