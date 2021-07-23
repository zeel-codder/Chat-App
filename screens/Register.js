import React from 'react';
import { StyleSheet, TextInput, View,Image,Text, Button,StatusBar } from 'react-native';
import { useState ,useLayoutEffect} from 'react';
import {  KeyboardAvoidingView  } from 'react-native';
import styles from '../stlye/Auth';
import { auth, db } from '../firebase';
import { HomeScreen ,UserSchema} from '../Const';
import LoadingPage from './Loading';

const Register = ({navigation}) => {

    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [password,setPassWord]=useState('')
    const [conformpassword,setConformPassword]=useState('')
    const [phoneNumber,setPhoneNUmber]=useState('')
    const [img,setimg]=useState('')

    // const [Loading,setLoading]=useState(false);

    const register=async ()=>{

      // console.log(email,password)
      // con/sole.log('call')
      // setLoading(true)
  auth
  .createUserWithEmailAndPassword(
    email,
    password
  )
  .then((userRecord) => {
     userRecord.user.updateProfile({
      displayName:name,
      photoURL:img || 'https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
     })
    //  setLoading(false)
    //  db.collection('is').
    
     db.collection(UserSchema).add({email,password,displayName:name,photoURL:img || 'https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'})
     navigation.replace(HomeScreen)
  })
  .catch((error) => {
    // setLoading(false)
    console.log(error)
    alert(error.message)
  });


 

    }
    

    return (
        <KeyboardAvoidingView  style={styles.container}
        behavior={"padding"}
        >
          {/* {Loading && <LoadingPage></LoadingPage>} */}
          {/* <StatusBar style="light"></StatusBar> */}
         <Image
        source={{uri: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"}}
        style={{width: 200, height: 200}}
      />
      <Text style={styles.input}>Create Account
      </Text>
     
     <View>

      <TextInput
        style={styles.input}
        placeholder="FullName"
        onChangeText={setName}
        type="text"
        value={name}
        autoFocus
        />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        type="email"
     
        
        />
      <TextInput
        style={styles.input}
        placeholder="Password"
        type="password"
        secureTextEntry
        value={password}
        onChangeText={setPassWord}
        />
      {/* <TextInput
        style={styles.input}
        placeholder="Conform Password"
        type="password"
        secureTextEntry
        onChangeText={password=> setConformPassword(password)}
        /> */}
      {/* <TextInput
        style={styles.input}
        placeholder="Phone No"
        type="number"
        onChangeText={text=> setPhoneNUmber(text)}
        /> */}
      {/* <Button  title="Log In"></Button> */}

      <TextInput
        style={styles.input}
        placeholder="Imge"
        onChangeText={setimg}
        value={img}
        type="url"
        
        />
      <View style={{height:2}}></View>
      <Button  title="Register"
      color="slategrey"
      onPress={register}

      ></Button>
      <View style={{height:100}}></View>
      </View>
      </KeyboardAvoidingView>
    );
};


export default Register;