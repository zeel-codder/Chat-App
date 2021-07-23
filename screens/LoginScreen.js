import React from 'react';
import { StyleSheet, TextInput, View,Image,Text, Button,StatusBar } from 'react-native';
import { useState,useEffect } from 'react';
import {  KeyboardAvoidingView  } from 'react-native';
import styles from '../stlye/Auth';
import { auth } from '../firebase';
import { HomeScreen } from '../Const';
import LoadingPage from './Loading';

const Login = ({navigation}) => {

    const [email,setEmail]=useState('')
    const [password,setPassWord]=useState('')

    // const [Loading,setLoading]=useState(true);

    useEffect(() => {
      const userhash=auth.onAuthStateChanged((user)=>{
        // console.log(user);
        if(user){
          navigation.replace(HomeScreen)
        }
        // setLoading(false)
      })
      return () => {
        userhash();
        // setLoading(false)
      }
    }, [])

    const login=()=>{

      // console.log(email,password)
      // con/sole.log('call')
      // console.log(email)
      // setLoading(true)
  auth
  .signInWithEmailAndPassword(email,password)
  .then((userRecord) => {
    // setLoading(false)
   navigation.replace(HomeScreen)
  })
  .catch((error) => {
    alert(error)
    // setLoading(false)
  });

    }



    return (
        <KeyboardAvoidingView  style={styles.container}
        behavior={"padding"}
        >

          {/* {Loading && <LoadingPage />} */}
          {/* <StatusBar style="light"></StatusBar> */}
         <Image
        source={{uri: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"}}
        style={{width: 200, height: 200}}
      />
      <Text style={styles.input}>Log In
      </Text>
     
     <View>

      <TextInput
        style={styles.input}
        placeholder="email"
        onChangeText={email=> setEmail(email)}
        type="Email"
     
        autoFocus
        />
      <TextInput
        style={styles.input}
        placeholder="Password"
        type="password"
        secureTextEntry
    
        onChangeText={password=> setPassWord(password)}
        />
      <Button  title="Log In"

      onPress={login}
      ></Button>
      <View style={{height:2}}></View>
      <Button  title="Register"
      color="slategrey"
      onPress={()=>navigation.navigate('Register')}
      ></Button>
      </View>
      </KeyboardAvoidingView>
    );
};



export default Login;