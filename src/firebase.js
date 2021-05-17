import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAibkYISCJIXkg9GCc_O8nX1NowqnWvFrE",
    authDomain: "whatsapp-clone-8538d.firebaseapp.com",
    projectId: "whatsapp-clone-8538d",
    storageBucket: "whatsapp-clone-8538d.appspot.com",
    messagingSenderId: "110859664579",
    appId: "1:110859664579:web:30156ba98a1d6d3f20f676",
    measurementId: "G-KBN58EFCXW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;