// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD6MkU0kLrtWh9cOVycj-HdhAAqX2var58',
  authDomain: 'technet-react-redux-e75a0.firebaseapp.com',
  projectId: 'technet-react-redux-e75a0',
  storageBucket: 'technet-react-redux-e75a0.appspot.com',
  messagingSenderId: '200134121153',
  appId: '1:200134121153:web:5801965c7b3dc6cd046640',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
