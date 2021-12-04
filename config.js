
import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCS4GAEDWFShArj0eipXREdfULUoh4IXnQ",
  authDomain: "project67-db7f1.firebaseapp.com",
  databaseURL: "https://project67-db7f1-default-rtdb.firebaseio.com/", 
  projectId: "project67-db7f1",
  storageBucket: "project67-db7f1.appspot.com",
  messagingSenderId: "200919822645",
  appId: "1:200919822645:web:8f1ac2f4ed2d9d3ba91c7c"
};
// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);

export default app.database();