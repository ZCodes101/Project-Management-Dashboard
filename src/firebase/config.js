import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBddftkGzM9kgSoGyck0a0AC55shJaCv34",
    authDomain: "pmdashboard-4684f.firebaseapp.com",
    projectId: "pmdashboard-4684f",
    storageBucket: "pmdashboard-4684f.appspot.com",
    messagingSenderId: "56862662739",
    appId: "1:56862662739:web:f8c3d2255c66cdfad4a6a6"
  };


// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }