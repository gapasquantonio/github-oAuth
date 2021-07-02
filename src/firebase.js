import firebase from "firebase";


const  firebaseConfig = {
    apiKey: "AIzaSyDEOuMYtrFFf_IfFEFUY1z_k0lLaCkTn6U",
    authDomain: "compasso-uol---github.firebaseapp.com",
    projectId: "compasso-uol---github",
    storageBucket: "compasso-uol---github.appspot.com",
    messagingSenderId: "1015545852378",
    appId: "1:1015545852378:web:4757133c58f19f647f10e3",
    measurementId: "G-Y7D3T9T2DT"
  };



  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  var provider = new firebase.auth.GithubAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });
  const storage = firebase.storage();


  export {auth, provider,storage};
  