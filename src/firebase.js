import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const app = firebase.initializeApp({
    apiKey: "AIzaSyAoysPabspjNv7rnTtJOhFD8lReNn-eMB4",
    authDomain: "dropbox-r.firebaseapp.com",
    projectId: "dropbox-r",
    storageBucket: "dropbox-r.appspot.com",
    messagingSenderId: "644065884772",
    appId: "1:644065884772:web:54d2b9eb9ddd9492027d71"
});
const firestore = app.firestore();

export const database = {
    folders: firestore.collection("folders"),
    files: firestore.collection("files"),
    formatDoc: doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    },
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp
}

export const storage = app.storage();
export const auth = app.auth();
export default app;

