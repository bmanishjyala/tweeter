// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, doc } from "firebase/firestore";
import { GoogleAuthProvider,getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-H17dyw6ziw4KyoA35djzVjdBHco0uX0",
  authDomain: "cloneinsta-a1608.firebaseapp.com",
  projectId: "cloneinsta-a1608",
  storageBucket: "cloneinsta-a1608.appspot.com",
  messagingSenderId: "900059475242",
  appId: "1:900059475242:web:c2a21110ec936739c70253"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage=getStorage(app)
const db=getFirestore(app)
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {projectStorage,db,auth,provider,doc}