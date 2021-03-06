import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const config = {
    apiKey: "AIzaSyCH9SIgDJ1cj_dPjJhEEvTElNzr2eanomU",
    authDomain: "clothing-site-2f4e8.firebaseapp.com",
    databaseURL: "https://clothing-site-2f4e8.firebaseio.com",
    projectId: "clothing-site-2f4e8",
    storageBucket: "clothing-site-2f4e8.appspot.com",
    messagingSenderId: "490622547024",
    appId: "1:490622547024:web:bf8e00316fe35cb0184d55",
    measurementId: "G-ZXBYLB6042"
}

export const createUserProfileDocument = async (userAuth,additionalData)=>{
    if(!userAuth) return; // if no user just return from the function doing nothing
    
     const userRef =  firestore.doc(`/users/${userAuth.uid}`)

     const snapShot = await userRef.get();

     if(!snapShot.exists){
         const {displayName,email} = userAuth;
         const createdAt = new Date();

         try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            }) 


         } catch (error) {
             console.log("error during creating user ",error.message);
         }
     }

     return userRef;
};



firebase.initializeApp(config);

export const auth = firebase.auth(); // using auth outside this file referencing to firebase auth, even firestore also as mentioned in next line.
export const firestore = firebase.firestore();

// google authentication 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;