import React,{useEffect} from 'react';
import 'react-native-gesture-handler';
// import { View, Text, Image, ScrollView/, TextInput,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/LoginScreen';
import Register from './screens/Register'
import Home from './screens/Home'
import AddGroup from './screens/AddGroup'
import Users from './screens/Users';
import Chat from './screens/Chat'
import { AddGroupScreen, ChatScreen, HomeScreen,  LoginScreen, RegisterScreen,UsersScreen} from './Const';


const Stack = createStackNavigator();
// const Stack = createDrawerNavigator();



const App = () => {
  

  return (
    <NavigationContainer>
      
    <Stack.Navigator initialRouteName={LoginScreen}> 
    {/* <Stack.Screen
        name="Home"
        component={HomeScreen}
       
      /> */}
      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
      /> */}
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name={AddGroupScreen}
          component={AddGroup}

        />
        <Stack.Screen
          name="Login"
          component={Login}
         
        />
        <Stack.Screen
          name="Register"
          component={Register}
        

        />
        <Stack.Screen
          name={UsersScreen}
          component={Users}
        />
        <Stack.Screen
          name={ChatScreen}
          component={Chat}
        />
          

        
        
      </Stack.Navigator>


  </NavigationContainer>
  );
}



export default App;