import HomeScreen from './screens/HomeScreen';
import TaskAssignerScreen from './screens/TaskAssigner';
import AccountScreen from './screens/Account';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import SignUp from "./screens/auth/SignupScreen";
import Login from "./screens/auth/LoginScreen";


export const SignedOut = createStackNavigator({
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: "Sign Up",
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: "Login"
        }
    }
},  {
        initialRouteName: "SignUp"
    });

export const SignedIn = createBottomTabNavigator(
    {
      TaskAssigner: TaskAssignerScreen,
      Home: HomeScreen,
      Account: AccountScreen
    },
    {
      initialRouteName: 'Home',
    }
  );

export const createRootNavigator = (signedIn = false) => {
    return createSwitchNavigator({
        SignedIn: {
            screen: SignedIn
        }, 
        SignedOut: {
            screen: SignedOut
        }
    }, {
        initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    });
};