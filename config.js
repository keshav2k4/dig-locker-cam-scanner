import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig= {
    apiKey: "AIzaSyCiXac1w7Zz3xWV__wd033I4_b5Lplj1b0",
    authDomain: "otp-authentication-locker.firebaseapp.com",
    projectId: "otp-authentication-locker",
    storageBucket: "otp-authentication-locker.appspot.com",
    messagingSenderId: "438299360441",
    appId: "1:438299360441:web:293aaadd40e6c644482f68",
    measurementId: "G-R0GN380SG8"
}

if(!firebase.apps.length)
{
    firebase.initializeApp(firebaseConfig);
}

