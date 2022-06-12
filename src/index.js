// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseApp = initializeApp({
  apiKey: "AIzaSyC5OH39jYo2RDk1zzHV42y_cQvuXd5XwJw",
  authDomain: "petshunter-t2g10.firebaseapp.com",
  projectId: "petshunter-t2g10",
  storageBucket: "petshunter-t2g10.appspot.com",
  messagingSenderId: "1023437746736",
  appId: "1:1023437746736:web:b219ac78df388a50ff73f5"
});

// Initialize Firebase
const db = getFirestore(firebaseApp);
const animalCol = collection(db, 'animal');
const snapshot = await getDocs(animalCol);

        
// Get a list of cities from your database
async function getAnimais() {
    const animalList = snapshot.docs.map(doc => doc.data());
    return animalList;
}
        
// Printa a lista de animais
console.log(getAnimais());