import firebase from 'firebase/app'
import 'firebase/firestore'


const config = {
  apiKey: "AIzaSyCsFHr_G3ZOzDUjxt3QI5NF88yYSA7av0w",
  authDomain: "pm-tool---react.firebaseapp.com",
  databaseURL: "https://pm-tool---react.firebaseio.com",
  projectId: "pm-tool---react",
  storageBucket: "pm-tool---react.appspot.com",
  messagingSenderId: "1065705035443",
  appId: "1:1065705035443:web:1999e5f5ebff07ff3742c6",
  measurementId: "G-NHJ1WNNFDH"
}

firebase.initializeApp(config)

const db = firebase.firestore ()

const boardsRef =db.collection('boards')
const listsRef =db.collection('lists')
const cardsRef =db.collection('cards')

export { boardsRef, listsRef, cardsRef}