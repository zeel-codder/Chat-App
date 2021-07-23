import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useState, useEffect, useLayoutEffect } from 'react';
import { auth } from '../firebase';
import { Avatar, ButtonGroup } from 'react-native-elements';
import s from '../stlye/Auth'
import { AntDesign, Entypo } from '@expo/vector-icons';
import { AddGroupScreen } from '../Const';
import { HomeScreen, UsersScreen} from '../Const';
import Chat from './Uerpic';



const Home = ({ navigation }) => {

  useEffect(() => {
    const userhash = auth.onAuthStateChanged((user) => {
      // console.log(auth.currentUser);
      if (!user) {
        navigation.replace(HomeScreen)
      }

    })
    return () => {
      userhash();

    }
  }, [])

  useLayoutEffect(() => {

    // console.log('Call')
    auth.onAuthStateChanged((user) => {
      // console.log(user);
      if (!user) {
        navigation.replace(HomeScreen)
      }
      // setLoading(false)
      navigation.setOptions({
        headerLeft: () => (


          <View style={s.logo}>
            <TouchableOpacity>

              <Avatar
                rounded

                source={{
                  uri:
                    user.photoURL,
                }}

                onPress={()=>{
                  auth.signOut().then(
                    navigation.replace(HomeScreen)

                  ).catch((e)=>{
                    alert(e)
                  })
                }}
              >

              </Avatar>
            </TouchableOpacity>
          </View>

        ),
        headerRight: () => (
          <View style={s.iconstop}>
            <TouchableOpacity>
              <AntDesign name="camera" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="pencil" size={24} color="black"

                onPress={() => navigation.navigate(AddGroupScreen)
                }
              />
            </TouchableOpacity>
            <AntDesign name="addusergroup" size={24} color="black" onPress={() => navigation.navigate(UsersScreen)} />


          </View>
        )
      })
    })




  }, [])





  return (
    <ScrollView>
      {/* <Chat></Chat> */}
      <Text>zeel</Text>
    </ScrollView>
  );
};



export default Home;