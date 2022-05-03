// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA8cbxgGaCf6gAzjYXluPwRk1_WpmOtK6U',
  authDomain: 'image-uploader-7305c.firebaseapp.com',
  projectId: 'image-uploader-7305c',
  storageBucket: 'image-uploader-7305c.appspot.com',
  messagingSenderId: '289612255767',
  appId: '1:289612255767:web:d2180590f23e2588d10252',
  measurementId: 'G-6ZZ1G5N1BY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
