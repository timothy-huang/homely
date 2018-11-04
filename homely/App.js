import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import * as firebase from 'firebase';
import ApiKeys from './constants/ApiKeys';
import { createRootNavigator } from './router';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      signedIn: false
    };

    if (!firebase.apps.length) { 
      firebase.initializeApp(ApiKeys.FireBaseConfig);
     }
  }

  componentWillMount() {
    AsyncStorage.getItem('userData').then((user_data_json) => {
      let user_data = JSON.parse(user_data_json);
      if(user_data != null){
        this.setState({signedIn: true});
      }else{
        this.setState({signedIn: false});
      }
    });
  }

  render() {
    const Layout = createRootNavigator(this.state.signedIn);
    return <Layout/>;
  }
}