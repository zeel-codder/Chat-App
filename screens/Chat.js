import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Text, TextInput } from 'react-native';
import { Avatar, ButtonGroup } from 'react-native-elements';
import { useLayoutEffect } from 'react';
import s from '../stlye/Auth'
import { Entypo } from '@expo/vector-icons';
import {auth} from '../firebase'
import { HomeScreen } from '../Const';
// import { TextInput } from 'react-native';
import { Input } from 'react-native-elements';
// import { Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const Chat = ({ navigation, route }) => {
  const { displayName, photoURL } = route.params;
  useLayoutEffect(() => {
    const { displayName, photoURL } = route.params;
    // console.log('Call')

    navigation.setOptions({
      title: displayName,
      headerLeft: () => (


        <View style={s.logo}>
          <TouchableOpacity>

            <Avatar
              rounded


              source={{
                uri:
                  photoURL
              }}
            >

            </Avatar>

          </TouchableOpacity>
        </View>

      ),
      headerRight: () => (
        <View style={s.iconstop}>
          <Entypo name="home" size={24} color="black" onPress={() => navigation.navigate(HomeScreen)} />

        </View>
      )



    })


  }, [])
  return (
    <View style={styles.container}>

      <ScrollView style={styles.chats}>


        
        <View style={styles.other}>
          <Text style={styles.u}>
            {displayName}
          </Text>


        <Text style={styles.other}>
        chats
        
        </Text>
        </View>


        <View style={styles.me}>

        <Text style={styles.u}>
            {auth.currentUser.displayName}
          </Text>
        
        <Text style={styles.me}>
        chats
        </Text>
        </View>
        {/* < View style={styles.box} > 
        
          <TouchableOpacity>

            <Avatar
            containerStyle={styles.icon}
              rounded


              source={{
                uri:
                  photoURL
              }}
            >

            </Avatar>

          </TouchableOpacity>


        </View> */}
        {/* <Text style={styles.me}> chats</Text> */}
        {/* <View> chats</View> */}
      </ScrollView>
      {/* chats */}
      {/* chats */}

      <View style={styles.text}>
        <TextInput style={styles.input}
          placeholder='message ..'
        >

        </TextInput>
        <FontAwesome name="send" size={24} color="green"

        />
      </View>
    </View>



  );
}

const styles = StyleSheet.create({

  box:{
    'display':'flex'
  },
  u:{

    'color': 'white',
    'fontSize': 15,
    
  },



  container: {
    'display': 'flex',
    'flexDirection': 'column',
    'flex': 2
  },
  chats: {
    'display': 'flex',
    'flexDirection': 'column',
    'flex': 2,
    marginTop: 10
  },
  text: {
    'display': 'flex',
    'flexDirection': 'row',
    'alignItems': 'center',
    'marginRight': 5,

  },
  input: {
    'flex': 2,
    margin: 0,
    backgroundColor: '#eb8cec',
    padding: 5,
    'fontSize': 20,
    'borderRadius': 10,
    fontWeight: '200',
    'color': 'white',

  },
  other: {
    'alignSelf': 'flex-start',
    'backgroundColor': 'blue',
    padding: 10,
    'color': 'white',
    'marginLeft': 10,
    'fontSize': 20,
    'borderRadius': 14,
    fontWeight: '200',
    'position':'relative'
  },

  me: {
    'alignSelf': 'flex-end',
    'backgroundColor': 'gray',
    'marginRight': 10,
    padding: 10,
    'color': 'white',
    'fontSize': 20,
    'borderRadius': 14,
    fontWeight: '200'
  },
  icon:{
    'position':'absolute',
    'width':30,
    'height':30,
    // 'bottom':0,
    
    
        
    
  }

})

export default Chat;
