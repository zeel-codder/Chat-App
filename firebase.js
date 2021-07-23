import firebase from 'firebase/app'

import "firebase/auth";
// import "firebase/databas;
import "firebase/firestore";


const firebaseConfig ={
    apiKey: "AIzaSyAclVY4uhh1Rmp__ml0mpPg1FnRmTh4xjA",
    authDomain: "chat-app-82418.firebaseapp.com",
    projectId: "chat-app-82418",
    storageBucket: "chat-app-82418.appspot.com",
    messagingSenderId: "201273994385",
    appId: "1:201273994385:web:b7ebee0930f929906c6330"
  };
  
let app;

if(firebase.apps.length==0){
    app=firebase.initializeApp(firebaseConfig);
}else{
    app=firebase.app();
}




const auth=app.auth();

const db=app.firestore();

export {db,auth};
  