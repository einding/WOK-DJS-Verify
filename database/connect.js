const firebaseConfig = {


  apiKey: "AIzaSyCRhc0RdhVJ5Y6PSAIL_nEJjufiI9gGbZk",


  authDomain: "verifydatabase-73acd.firebaseapp.com",


  databaseURL: "https://verifydatabase-73acd-default-rtdb.europe-west1.firebasedatabase.app",


  projectId: "verifydatabase-73acd",


  storageBucket: "verifydatabase-73acd.appspot.com",


  messagingSenderId: "423237483852",


  appId: "1:423237483852:web:43d3b03efbd77f6a0623e9",


  measurementId: "G-KRWJLETC0K"


};

const FirebaseAdmin = require("firebase-admin");
FirebaseAdmin.initializeApp(firebaseConfig);
module.exports.db = FirebaseAdmin.firestore();
