import React from 'react';
import {View, StyleSheet,ScrollView} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import { ChatScreen,HomeScreen } from '../Const';
import {auth} from '../firebase'

const chatbox = ({key1,title,Subtitle,displayName,photoURL,navigation}) => {
    return (
        <ListItem key={key1} bottomDivider onPress={()=>

        
         auth.currentUser.displayName===displayName  
         ?
          navigation.navigate(HomeScreen)
          :
          navigation.navigate(ChatScreen,{displayName,photoURL})}>
         
            
            <Avatar  rounded source={{uri: photoURL || "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}} />
        <ListItem.Content>
          <ListItem.Title>{displayName}</ListItem.Title>
          <ListItem.Subtitle>{Subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
}

const styles = StyleSheet.create({})

export default chatbox;
