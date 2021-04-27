import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyByAxA13HFSeRSEalaXuZI05flUrWKGW8g',
  authDomain: 'myfirstproject-54100.firebaseapp.com',
  databaseURL: 'https://myfirstproject-54100.firebaseio.com',
  projectId: "myfirstproject-54100",
  storageBucket: 'myfirstproject-54100.appspot.com',
  messagingSenderId: '322807631977',
  appId: '1:322807631977:android:3db6b158a66a26d69a12f8',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };