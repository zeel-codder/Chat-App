import React from 'react';
import {View, StyleSheet,SafeAreaView,ScrollView} from 'react-native';
import { useEffect,useState } from 'react';
import { auth, db } from '../firebase';
import User from './Uerpic';
import { UserSchema } from '../Const';
import { SearchBar } from 'react-native-elements';

const Users = ({navigation}) => {

    const [user,setUser]=useState([]);
    const [search,setText]=useState('');
    const [list,setList]=useState([]);

    const listAllUsers = async() => {
        // List batch of users, 1000 at a time.
        
          try{

            const citiesRef = db.collection(UserSchema);
            const snapshot = await citiesRef.get();
            const users=[]
            // console.log('start')
            snapshot.forEach(doc => {
                users.push(doc.data())
                // console.log('run')
            });
            console.log(users)
            setUser(users)
            setList(users)

            }catch(e){
                console.log(e);
            }
        
      };
    useEffect (()=>{

        listAllUsers();
        // console.log(user)
        
    },[])
    useEffect (()=>{

        const newlist=list.filter((data)=>{
            const regex=new RegExp(search,'gi');
            return data.displayName.match(regex);
        }

        )
        setUser(newlist)
        
    },[search])
    // console.log(user);

    return (
       <SafeAreaView>
           <ScrollView>
           <SearchBar
        placeholder="Search User..."
        onChangeText={text=>setText(text)}
        value={search}
      />
               {
                   user.map((data,index)=>{
                       const {displayName,photoURL,email}=data;
                     
                       return <User key={index} key1={index} Subtitle={email} photoURL={photoURL} displayName={displayName} navigation={navigation}/>
                   })
               }
           </ScrollView>
       </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Users;
