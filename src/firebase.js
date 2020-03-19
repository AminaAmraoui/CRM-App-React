import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'


const config ={
    apiKey: " ",
    authDomain: " ",
    databaseURL: " ",
    projectId: " ",
    storageBucket: " ",
    messagingSenderId: " ",
    appId: "",
    measurementId: ""
}

firebase.initializeApp(config)
firebase.analytics()



export default firebase
