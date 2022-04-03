import { initializeApp } from "firebase/app";


import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDDOSUu5ayh66y2DWztYe6KwthhRy9ok6s",
  authDomain: "examchamp-582b8.firebaseapp.com",
  projectId: "examchamp-582b8",
  storageBucket: "examchamp-582b8.appspot.com",
  messagingSenderId: "30885705408",
  appId: "1:30885705408:web:85e282b5c61ae771c11f25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init Services
const auth = getAuth(app);

export {auth};

// signing users up
// export function signup(email, password){
//     return createUserWithEmailAndPassword (auth, email, password, username);
// }

// const signupForm = document.querySelector('.signup')
// signupForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const email = signupForm.email.value
//     const password = signupForm.password.value

//     createUserWithEmailAndPassword(auth, email,password)
//     .then ((cred) => {
//         console.log('user created:',cred.user)
//         signupForm.reset()
//     })
//     .catch((err) => {
//         console.log(err.message)
//     })
// })

