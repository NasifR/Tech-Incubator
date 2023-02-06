import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCD9JeyWHr5wvW6IUOK1PlRPECymfDNmK8",
    authDomain: "tech-incubator-608c5.firebaseapp.com",
    databaseURL: "https://tech-incubator-608c5-default-rtdb.firebaseio.com",
    projectId: "tech-incubator-608c5",
    storageBucket: "tech-incubator-608c5.appspot.com",
    messagingSenderId: "940676246825",
    appId: "1:940676246825:web:ecef4eec0ad93150449b38"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default firebase