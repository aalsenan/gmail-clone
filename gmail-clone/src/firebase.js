import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyCVY0TlKc5OKU17AolfgWQ8psZMmgGnapg",
    authDomain: "clone-60df1.firebaseapp.com",
    projectId: "clone-60df1",
    storageBucket: "clone-60df1.appspot.com",
    messagingSenderId: "687365084102",
    appId: "1:687365084102:web:a7ed2dc3754dd63d09d8c7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};