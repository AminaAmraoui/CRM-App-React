import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'


const config ={
    apiKey: "AIzaSyDbB9kXs0zLTBzyd4qFKM_ahsii24YqZek",
    authDomain: "crm-app-20e1a.firebaseapp.com",
    databaseURL: "https://crm-app-20e1a.firebaseio.com",
    projectId: "crm-app-20e1a",
    storageBucket: "crm-app-20e1a.appspot.com",
    messagingSenderId: "236042662431",
    appId: "1:236042662431:web:300c31044e871933eddb2a",
    measurementId: "G-FQ13MT426D"
}

firebase.initializeApp(config)
firebase.analytics()



export default firebase