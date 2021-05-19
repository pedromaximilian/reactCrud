import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC_4RcM30HNkPiitXC446T3othXnOA7YoI",
    authDomain: "reactcrud-7c114.firebaseapp.com",
    projectId: "reactcrud-7c114",
    storageBucket: "reactcrud-7c114.appspot.com",
    messagingSenderId: "803806354342",
    appId: "1:803806354342:web:939dfbfe58672501520d67"
  };


  export const firebaseApp = firebase.initializeApp(firebaseConfig)